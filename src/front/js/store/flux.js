const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: localStorage.getItem("token"),
			userAuth: JSON.parse(localStorage.getItem("userAuth")), // Almacenamos el usuario logueado
			recentlyRegister: false,
			buddyList: []
		},
		actions: {
			fetchUserAuth: async () => {
				const store = getStore();
				const opts = {
					headers: {
						Authorization: `Bearer ${store.token}`
					}
				};

				const res = await fetch(process.env.BACKEND_URL + "/api/user-auth", opts);
				const data = await res.json();
				localStorage.setItem("userAuth", JSON.stringify(data[0].user));
				setStore({ ...store, userAuth: data[0].user });
			},
			syncTokenFromLocalStorage: () => {
				const token = localStorage.getItem("token");
				if (token && token != "" && token != undefined) {
					setStore({ ...getStore(), token: token });
				}
			},
			registerUser: async user => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						id: user.id,
						email: user.email,
						name: user.name,
						last_name: user.lastName,
						role: user.role,
						password: user.password
					})
				};
				try {
					const res = await fetch(process.env.BACKEND_URL + "/api/register", opts);
					if (res.status !== 200) {
						alert("Usuario ya existe");
						return false;
					}
					const data = await res.json();
					setStore({ ...getStore(), recentlyRegister: true });
					return true;
				} catch (error) {
					console.log("Ha ocurrido un error al registrarse", error);
				}
			},
			login: async (email, password) => {
				const store = getStore();

				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};

				const resp = await fetch(process.env.BACKEND_URL + "/api/token", opts);
				if (resp.status === 401) {
					alert("El usuario o contraseña son invalidos");
					return false;
				}
				const data = await resp.json();
				localStorage.setItem("token", data.token);
				setStore({ ...store, token: data.token });
				return true;
			},
			logout: () => {
				localStorage.removeItem("token");
				localStorage.removeItem("userAuth");
				setStore({ ...getStore(), token: null });
				setStore({ ...getStore(), userAuth: null });
			},
			getAllBuddies: async () => {
				const res = await fetch(process.env.BACKEND_URL + "/api/buddy");
				const data = await res.json();
				setStore({ ...getStore(), buddyList: data });
			}
		}
	};
};

export default getState;

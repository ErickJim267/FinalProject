const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			token: null,
			userLogged: null,
			recentlyRegister: false,
			buddyList: []
		},
		actions: {
			fetchUserLogged: async () => {
				const store = getStore();
				const opts = {
					headers: {
						Authorization: `Bearer ${store.token}`
					}
				};

				const res = await fetch(process.env.BACKEND_URL + "/api/user_logged", opts);
				const data = await res.json();
				console.log(data[0].user);
				setStore({ ...getStore(), userLogged: data[0].user });
			},
			syncTokenFromLocalStorage: () => {
				const token = localStorage.getItem("token");
				if (token && token != "" && token != undefined) setStore({ ...getStore(), token: token });
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
				console.log(data);
				localStorage.setItem("token", data.token);
				setStore({ ...getStore(), token: data.token });
				return true;
			},
			logout: () => {
				localStorage.removeItem("token");
				setStore({ ...getStore(), token: null });
			},
			getAllBuddies: async () => {
				const res = await fetch(process.env.BACKEND_URL + "/api/buddy");
				const data = await res.json();
				setStore({ ...getStore(), buddyList: data });
			},
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;

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
			token: localStorage.getItem("token") || ""
		},
		actions: {
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
						alert("Sucedió un error");
						return false;
					} //Pendiente revisar lógica
					else if (res.status === 409) {
						alert("Usuario ya existe");
						return false;
					}
					const data = await res.json();
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

				const resp = await fetch("https://3001-amethyst-pig-gbpf0qq2.ws-us04.gitpod.io/api/token", opts)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						localStorage.setItem("token", data.token);
						setStore({ token: data.token });
					});
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

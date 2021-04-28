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
			]
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
					}
					const data = await res.json();
					return true;
				} catch (error) {
					console.log("Ha ocurrido un error al registrarse", error);
				}
			},
			login: (email, password) => {
				console.log("Logueando....");
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			myURL: "https://3000-harlequin-earwig-xkme9a30.ws-us16.gitpod.io",
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			initializeFunction: () => {
				getActions().loadCharacter();
				getActions().loadPlanets();
				getActions().loadVehicles();
				getActions().addFavorite();
				getActions().login();
				// getActions().getPlanets();
			},
			login: (username, password) => {
				fetch(`${getStore().myURL}/token`, {
					headers: { "content-type": "application/json" },
					method: "POST",
					body: JSON.stringify({
						username: username,
						password: password
					})
				})
					.then(resp => {
						if (resp.ok) return resp.json();
						else if (resp.status === 401) {
							console.log("Invalid credentials");
						} else if (resp.status === 400) {
							console.log("Invalid email or password format");
						} else throw Error("Uknown error");
					})
					.then(data => {
						// save your token in the localStorage
						localStorage.setItem("jwt-token", data.token);
					})
					.catch(error => console.error("There has been an uknown error", error));
			},

			// getPlanets: () => {
			// 	const token = localStorage.getItem("jwt-token");

			// 	fetch(`${getStore().myURL}/planet/`, {
			// 		method: "GET",
			// 		headers: { Authorization: "Bearer " + token } // ⬅ authorization token
			// 	})
			// 		.then(resp => {
			// 			if (resp.ok) return resp.json();
			// 			else if (resp.status === 403) {
			// 				console.log("Missing or invalid token");
			// 			} else {
			// 				throw Error("Uknon error");
			// 			}
			// 		})
			// 		.then(data => {
			// 			setStore({ planets: data });
			// 			console.log("This is the data your requested", data);
			// 		})
			// 		.catch(error => console.error("There has been an uknown error", error));
			// },
			loadCharacter: async () => {
				const endPoint = "/character/";
				const token = localStorage.getItem("jwt-token");
				try {
					const response = await fetch(`${getStore().myURL}${endPoint}`, {
						method: "GET",
						headers: { Authorization: "Bearer " + token }
					});
					const data = await response.json();
					console.log(data);
					setStore({ people: data });
				} catch (error) {
					throw new Error(error);
				}
			},
			loadPlanets: async () => {
				const endPoint = "/planet/";
				const token = localStorage.getItem("jwt-token");
				try {
					const response = await fetch(`${getStore().myURL}${endPoint}`, {
						method: "GET",
						headers: { Authorization: "Bearer " + token }
					});
					const data = await response.json();
					console.log(data);
					setStore({ planets: data });
				} catch (error) {
					throw new Error(error);
				}
			},
			loadVehicles: async () => {
				const endPoint = "/vehicle/";
				const token = localStorage.getItem("jwt-token");
				try {
					const response = await fetch(`${getStore().myURL}${endPoint}`, {
						method: "GET",
						headers: { Authorization: "Bearer " + token }
					});
					const data = await response.json();
					console.log(data);
					setStore({ vehicles: data });
				} catch (error) {
					throw new Error(error);
				}
			},
			addFavorite: favoriteName => {
				let newFavorites = getStore().favorites;
				let found = newFavorites.find(item => item == favoriteName);
				if (found) {
					newFavorites = newFavorites.filter(item => item != favoriteName);
				} else {
					newFavorites = [...newFavorites, favoriteName];
				}
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;

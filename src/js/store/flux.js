const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			myURL: "https://swapi.dev/api",
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			initializeFunction: () => {
				getActions().loadCharacter();
				getActions().loadPlanets();
				getActions().loadVehicles();
				// getActions().loadFavorites();
			},
			loadCharacter: async () => {
				const endPoint = "/people/";
				try {
					const response = await fetch(`${getStore().myURL}${endPoint}`);
					const data = await response.json();
					console.log(data);
					setStore({ characters: data.results });
				} catch (error) {
					throw new Error(error);
				}
			},
			loadPlanets: async () => {
				const endPoint = "/planets/";
				try {
					const response = await fetch(`${getStore().myURL}${endPoint}`);
					const data = await response.json();
					console.log(data);
					setStore({ planets: data.results });
				} catch (error) {
					throw new Error(error);
				}
			},
			loadVehicles: async () => {
				const endPoint = "/vehicles/";
				try {
					const response = await fetch(`${getStore().myURL}${endPoint}`);
					const data = await response.json();
					console.log(data);
					setStore({ vehicles: data.results });
				} catch (error) {
					throw new Error(error);
				}
			},
			// loadFavorites: async () => {
			// 	const endPoint = "/favorites/";
			// 	try {
			// 		const response = await fetch(`${getStore().myURL}${endPoint}`);
			// 		const data = await response.json();
			// 		console.log(data);
			// 		setStore({ favorites: data.results });
			// 	} catch (error) {
			// 		throw new Error(error);
			// 	}
			// },
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.vehicles.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ vehicles: demo });
			}
		}
	};
};

export default getState;

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
			},
			loadCharacter: async () => {
				const endPoint = "/character/";
				try {
					const response = await fetch(`${getStore().myURL}${endPoint}`);
					const data = await response.json();
					console.log(data);
					setStore({ people: data });
				} catch (error) {
					throw new Error(error);
				}
			},
			loadPlanets: async () => {
				const endPoint = "/planet/";
				try {
					const response = await fetch(`${getStore().myURL}${endPoint}`);
					const data = await response.json();
					console.log(data);
					setStore({ planets: data });
				} catch (error) {
					throw new Error(error);
				}
			},
			loadVehicles: async () => {
				const endPoint = "/vehicle/";
				try {
					const response = await fetch(`${getStore().myURL}${endPoint}`);
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

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets:[],
			characters:[],
			favorites:[],
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
			addFav:(name,id)=>{
				const store = getStore();
				//console.log("elemento será agregado a fav", name)
				// filtro si elemento ya está en fav, y solo agrega si es que no lo encuentra
				// .length para ver cantidad de coincidencias de elementos encontrados
				//0=false n=true - ! lo niega 
				if(!store.favorites.filter((fav) => fav.id === id).length){
				setStore({favorites:[...store.favorites,{name, id}]})
				}
			},	
			deleteFav:(index)=>{
			const store = getStore();
			setStore({favorites:[...store.favorites.filter((fav) => fav.id !== index)]});
			},	
			// favorites.filter((value, i) => index != i))
			
			getCharacters:()=>{
				fetch("https://www.swapi.tech/api/people")
				.then(response=>response.json())
				.then(data => setStore ({characters:data.results}) 				 
			)},

            getPlanets:()=>{
               fetch("https://www.swapi.tech/api/planets")
			   .then(response=>response.json())
			   .then(data=>{ setStore({planets:data.results}) 
			   })
			},
		
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
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

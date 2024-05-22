const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			// contacts : [
			// 	{
			// 		id: "",
			// 		fullname: "",
			// 		email: "",
			// 		address: "",
			// 		phone: ""
			// 	}
			// ]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				// fetch("https://playground.4geeks.com/contact/agendas/labs404")
				// .then(response => response.json())
				// .then(data => setStore({ "contacts": data.contacts }))
			},
			
			// deleteOneContact: (id) => {
			// 	fetch("https://playground.4geeks.com/contact/agendas/labs404", {
			// 		method: 'DELETE',
			// 		body: JSON.stringify(id),
			// 		headers: {'Content-Type': 'application/json'}
			// 	})
			// 	.then(response => {if(!response.ok) throw Error(response.statusText);
			// 		return response;})
			// 	.then(response => console.log("One contact deleted.", response))
			// },

			// deleteSomeData: (id) => {
			// 	const store = getStore();
			// 	let contactList = store.contacts.filter(() => {
			// 		contact => contact.id!==id;
			// 	});
			// 	getActions().deleteOneContact(id);
			// 	setStore({ contacts: contactList});
			// },
			
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

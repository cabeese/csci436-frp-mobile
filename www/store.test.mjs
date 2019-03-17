import store from './store';

console.log(store.getters.availableDonations);

//store.commit("addDonation", {name: "donation 0"});
//store.dispatch("fetchDonations");

let myDonation = {
	"location": "Bellingham",
	"contactPhone": "555-3101",
	"items": [
		{
			"foodName": "Blueberries",
			"initialQty": 5,
			"remainingQty": 5,
			"qtyUnits": "crates"
		}

	],
}

store.dispatch("postDonation", myDonation);

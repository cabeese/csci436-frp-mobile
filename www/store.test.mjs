import store from './store';

console.log(store.getters.availableDonations);

//store.commit("addDonation", {name: "donation 0"});
store.dispatch("fetchDonations");

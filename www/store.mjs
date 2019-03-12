import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        donations: []
    },
    mutations: {
        addDonation(state, donation){
            console.log("adding a donation");
            state.donations.push(donation);
        },
        addDonations(state, donations){
            console.log("adding multiple donations");
            state.donations = [...state.donations, ...donations];
        }
    },
    getters: {
        availableDonations: state => {
            return state.donations.filter(donation => !donation.claimed);
        }
    },

    actions: {
        async fetchDonations(context){
            // pretend to do async fetch
            console.log("fetching...");
            await new Promise((resolve, reject) => { setTimeout(resolve, 1000); });
            let donations = [{name: "donatino 1"}, {name: "donation 2"}];
            console.log("fetched!");

            context.commit("addDonations", donations);
            console.log(context.state.donations);
        }
    }
});

export default store;

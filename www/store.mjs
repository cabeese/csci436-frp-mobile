import Vue from 'vue';
import Vuex from 'vuex';
import fetch from 'node-fetch';

Vue.use(Vuex);

const ROOT_URL = "https://foodbanks-staging.herokuapp.com/mob/v1/donation/";
// const ROOT_URL = "http://localhost:1337/mob/v1/donation/";

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
            const response = await fetch(ROOT_URL + "get-avail");
            const donations = await response.json()

            context.commit("addDonations", donations);
            console.log(context.state.donations);
        },

        async postDonation(context, donation){
            console.log("trying to donate:", donation);
            validateDonation(donation);
            const response = await fetch(ROOT_URL + "post-new", {
                method: "POST",
                body: JSON.stringify(donation)
            });

            context.commit("addDonation");
        }
    }
});

function validateDonation(donation){
    const requiredFields = [
        "location", "contactPhone", "items"
    ];
    requiredFields.forEach(field => {
        if(!donation[field]) throw Error(`Donation is missing field: '${field}'`);
    });

    const requiredItemFields = [
        "foodName", "initialQty", "remainingQty", "qtyUnits"
    ];
    donation.items.forEach((item, index)=>{
        requiredItemFields.forEach(field => {
            if(!item[field]) throw Error(`Donation item #${index} is missing '${field}'`);
        });
    })
}

export default store;

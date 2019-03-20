import { CALL_FETCH_DONATIONS, FETCH_DONATIONS_SUCC, FETCH_DONATIONS_FAIL, SET_ACTIVE_DONATION } from "../actionTypes";

const initialState = {
    loading: false,
    errorMessage: '',
    donations: [],
    activeDonationIdx: -1,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_DONATION: {
            let idx = -1;
            const { id } = action;
            const { donations } = state;
            while(++idx < donations.length && donations[idx].id != id){}
            if(idx < donations.length){
                return {
                    ...state,
                    activeDonationIdx: idx,
                }
            } else {
                return {
                    ...state,
                    activeDonationIdx: -1,
                };
            }
        }
        case CALL_FETCH_DONATIONS: {
            return {
                ...state,
                loading: true,
            }
        }
        case FETCH_DONATIONS_SUCC: {
            return {
                ...state,
                errorMessage: "",
                loading: false,
                donations: action.donations,
            }
        }
        case FETCH_DONATIONS_FAIL: {
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage,
            }
        }
        default:
            return state;
    }
}

import { NEW_DONATION_POST, NEW_DONATION_FAIL, NEW_DONATION_SUCC } from "../actionTypes";

const initialState = {
    loading: false,
    errorMessage: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        /* CLAIM DONATION */
        case NEW_DONATION_POST: {
            return {
                ...state,
                errorMessage: "",
            }
        }
        case NEW_DONATION_SUCC: {
            return {
                ...state,
                loadingClaim: false,
                errorMessage: "",
                justClaimed: true,
            }
        }
        case NEW_DONATION_FAIL: {
            return {
                ...state,
                loadingClaim: false,
                errorMessage: action.errorMessage,
                justClaimed: false,
            }
        }
        default:
            return state;
    }
}

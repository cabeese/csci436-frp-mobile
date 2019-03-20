import { CLAIM_DONATION_PART, CLAIM_DONATION_SUCC, CLAIM_DONATION_FAIL, SET_ACTIVE_DONATION } from "../actionTypes";

const initialState = {
    loading: false,
    errorMessage: '',
    justClaimed: false, /* This is an ugly hack */
};

export default function (state = initialState, action) {
    switch (action.type) {
        /* CLAIM DONATION */
        case SET_ACTIVE_DONATION: {
            return {
                ...state,
                errorMessage: "",
                justClaimed: false,
            }
        }
        case CLAIM_DONATION_PART: {
            return {
                ...state,
                loadingClaim: true,
                justClaimed: false,
            };
        }
        case CLAIM_DONATION_SUCC: {
            return {
                ...state,
                loadingClaim: false,
                errorMessage: "",
                justClaimed: true,
            }
        }
        case CLAIM_DONATION_FAIL: {
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

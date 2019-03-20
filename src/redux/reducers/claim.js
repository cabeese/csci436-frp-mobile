import { CLAIM_DONATION_PART, CLAIM_DONATION_SUCC, CLAIM_DONATION_FAIL } from "../actionTypes";

const initialState = {
    loading: false,
    errorMessage: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        // CLAIM: fetch, then when it's done refresh with FETCH_DONATIONS
        /* CLAIM DONATION */
        case CLAIM_DONATION_PART: {
            console.log('reducer: claiming part');
            return {
                ...state,
                loadingClaim: true,
            };
        }
        case CLAIM_DONATION_SUCC: {
            console.log('reducer: fail');
            return {
                ...state,
                loadingClaim: false,
            }
        }
        case CLAIM_DONATION_FAIL: {
            console.log('reducer: fail');
            return {
                ...state,
                loadingClaim: false,
                errorMessage: "Put your error here"
            }
        }
        default:
            return state;
    }
}

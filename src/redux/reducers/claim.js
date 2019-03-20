import { CLAIM_DONATION_PART, CLAIM_DONATION_SUCC, CLAIM_DONATION_FAIL } from "../actionTypes";

const initialState = {
    loading: false,
    errorMessage: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        /* CLAIM DONATION */
        case CLAIM_DONATION_PART: {
            return {
                ...state,
                loadingClaim: true,
            };
        }
        case CLAIM_DONATION_SUCC: {
            return {
                ...state,
                loadingClaim: false,
                errorMessage: ""
            }
        }
        case CLAIM_DONATION_FAIL: {
            return {
                ...state,
                loadingClaim: false,
                errorMessage: action.errorMessage
            }
        }
        default:
            return state;
    }
}

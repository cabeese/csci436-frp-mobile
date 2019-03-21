import { NEW_DONATION_POST, NEW_DONATION_FAIL, NEW_DONATION_SUCC } from "../actionTypes";

const initialState = {
    loading: false,
    errorMessage: '',
    justPosted: false, /* This is still also a hack */
};

export default function (state = initialState, action) {
    switch (action.type) {
        /* CLAIM DONATION */
        case NEW_DONATION_POST: {
            return {
                ...state,
                loading: true,
                errorMessage: "",
                justPosted: false,
            }
        }
        case NEW_DONATION_SUCC: {
            return {
                ...state,
                loading: false,
                errorMessage: "",
                justPosted: true,
            }
        }
        case NEW_DONATION_FAIL: {
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage,
                justPosted: false,
            }
        }
        default:
            return state;
    }
}

import { CALL_FETCH_DONATIONS, FETCH_DONATIONS_SUCC, FETCH_DONATIONS_FAIL } from "../actionTypes";

const initialState = {
    loading: false,
    errorMessage: '',
    donations: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CALL_FETCH_DONATIONS: {
            return {
                ...state,
                loading: true,
            }
        }
        case FETCH_DONATIONS_SUCC: {
            // TODO: get `action.donations`
            return {
                ...state,
                errorMessage: "",
                loading: false,
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

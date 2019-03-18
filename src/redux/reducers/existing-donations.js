import { FETCH_DONATIONS } from "../actionTypes";

const initialState = {
    donations: [],
};

let nextId = 0;

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DONATIONS: {
            nextId += 1;
            return {
                ...state,
                donations: [
                    ...state.donations,
                    { key: String(nextId), name: "new donation" }
                ]
            };
        }
        default:
            return state;
    }
}

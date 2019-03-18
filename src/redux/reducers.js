import { combineReducers } from "redux";
import { TOGGLE_FOO } from "./actionTypes";

const initialState = {
    foo: true,
};

/* This reducer should be in its own file eventually */
function foobar(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FOO: {
      return {
        ...state,
        foo: !state.foo,
      };
    }
    default:
      return state;
  }
}

export default combineReducers({ foobar });

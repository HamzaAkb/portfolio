import { combineReducers } from "redux";
import { actionTypes } from "./action";

let dummyState = {
  name: "hamza",
  age: 23,
};

export const DummyReducer = (state = dummyState, action) => {
  // {
  //     type: "UPDATE_NAME",
  //     payload: value
  // }
  switch (action.type) {
    case actionTypes.UPDATE_NAME:
      state = Object.assign({}, state, { name: "Haseeb", ...state });
      return state;

    case actionTypes.UPDATE_AGE:
      state = Object.assign({}, state, { age: 20, ...state });
      return state;

    default:
      return state;
  }
};

export default combineReducers({ DummyReducer });

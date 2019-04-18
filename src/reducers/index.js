/**** CONSTANTES */
import { FETCH_USER } from "../actions/index";
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const anotherReducer = (selected = null, action) => {
  return selected;
};

export default combineReducers({
  users: userReducer,
  another: anotherReducer
});

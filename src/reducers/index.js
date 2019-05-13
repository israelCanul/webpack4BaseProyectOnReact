/**** CONSTANTES */
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { loaderReducer } from "./loaderReducer";
import { formReducer } from "./formReducer";

const anotherReducer = (selected = null, action) => {
  return selected;
};

export default combineReducers({
  users: userReducer,
  another: anotherReducer,
  loader: loaderReducer,
  forms: formReducer
});

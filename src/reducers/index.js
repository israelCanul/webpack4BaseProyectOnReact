/**** CONSTANTES */
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { loaderReducer } from "./loaderReducer";
import { formReducer } from "./formReducer";
import { notificationsReducer } from "./notificationsReducer";

const anotherReducer = (selected = null, action) => {
  return selected;
};

export default combineReducers({
  users: userReducer,
  another: anotherReducer,
  loader: loaderReducer,
  forms: formReducer,
  notifications: notificationsReducer
});

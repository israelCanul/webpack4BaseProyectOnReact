import { FETCH_USER } from "../actions/index";
import { log } from "util";
const initialState = {
  logged: false,
  loading: false,
  info: { name: "Jhon Martin", twitter: "@soyJhoni" }
};

export const userReducer = (state = initialState, action) => {
  var newState = { ...state };
  switch (action.type) {
    case FETCH_USER:
      {
        var tempState = { ...state };
        if (action.payload.isLoading) {
          tempState.loading = true;
        } else {
          tempState.loading = false;
          if (action.payload.status == 200) {
            tempState.logged = true;
            tempState.info = action.payload.data;
          } else {
            tempState.logged = false;
          }
        }
        newState = tempState;
      }
      break;
    default:
      newState = newState;
  }
  return newState;
};

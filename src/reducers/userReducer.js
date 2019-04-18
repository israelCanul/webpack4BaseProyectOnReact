import { FETCH_USER } from "../actions/index";
import { log } from "util";
const initialState = {
  logged: true,
  info: { name: "Jhon Martin", twitter: "@soyJhoni" }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      {
        return state;
      }
      break;
    default:
      return state;
  }
};

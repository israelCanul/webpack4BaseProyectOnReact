import { FETCH_USER } from "../actions/index";

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

        tempState.logged = true;
        tempState.info = action.payload.data;
        action.payload.data.name
          ? (tempState.logged = true)
          : (tempState.logged = false);

        newState = tempState;
      }
      break;
    default:
      newState = newState;
  }
  return newState;
};

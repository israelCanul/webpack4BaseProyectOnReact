import { SET_LOADER } from "../actions/index";

const initialState = {
  pause: false,
  open: false,
  text: "Initial tag"
};

export const loaderReducer = (state = initialState, action) => {
  var newState = { ...state };
  switch (action.type) {
    case SET_LOADER:
      {
        if (action.payload.play == true) {
          newState = { ...newState, pause: true, open: true };
          if (action.payload.text) {
            newState = { ...newState, text: action.payload.text };
          }
        } else {
          newState = {
            ...newState,
            pause: false,
            open: false,
            text: "Loading ..."
          };
        }
      }
      break;
    default:
      newState = newState;
  }
  //   newState = { ...newState, pause: true, open: true };
  return newState;
};

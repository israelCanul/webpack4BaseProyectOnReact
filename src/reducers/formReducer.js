import { SET_FORM, GET_FORM } from "../actions/formActions.js";

const initialState = {
  form: "",
  peticion: { code: 0, result: "" }
};

export const formReducer = (state = initialState, action) => {
  var newState = { ...state };
  switch (action.type) {
    case SET_FORM:
      {
        if (action.payload.data) {
          newState = {
            ...newState,
            peticion: { code: 1, result: action.payload.data }
          };
        } else {
          newState = {
            ...newState,
            peticion: { code: 0, result: action.payload.error }
          };
        }
      }
      break;
    case GET_FORM:
      {
      }
      break;
    default:
      newState = newState;
  }
  //   newState = { ...newState, pause: true, open: true };
  return newState;
};

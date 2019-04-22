import jsonPlaceHolder from "../api/jsonPlaceHolder";
export const FETCH_USER = "FETCH_USER";

// Action Creator
export const fetchUser = () => {
  return async function(dispatch, getState) {
    dispatch({ type: FETCH_USER, payload: { isLoading: true } });
    const response = await jsonPlaceHolder.get("/users/3");
    //setTimeout(() => {
    dispatch({ type: FETCH_USER, payload: response });
    //}, 5000);
  };
};

//  //Return an action
// return {
//   type: FETCH_USER,
//   payload: response
// };

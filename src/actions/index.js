import jsonPlaceHolder from "../api/jsonPlaceHolder";
export const FETCH_USER = "FETCH_USER";

// Action Creator
export const fetchUser = async () => {
  const response = await jsonPlaceHolder.get(
    process.env.ROOT_API_JSONPLACEHOLDER + "/users/2"
  );
  //Return an action
  return {
    type: FETCH_USER,
    payload: response
  };
};

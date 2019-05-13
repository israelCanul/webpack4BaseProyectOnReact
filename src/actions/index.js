import jsonPlaceHolder from "../api/jsonPlaceHolder";
export const FETCH_USER = "FETCH_USER";
export const SET_LOADER = "SET_LOADER";

// Action Creator
export const fetchUser = () => {
  return async function(dispatch) {
    dispatch({
      type: SET_LOADER,
      payload: { play: true, text: "Fetching User information" }
    });
    const response = await jsonPlaceHolder
      .get("/users/3")
      .then(res => {
        dispatch({ type: FETCH_USER, payload: res });
        setTimeout(() => {
          dispatch({ type: SET_LOADER, payload: { play: false } });
        }, 1000);
      })
      .catch(err => {
        // dispatch({
        //   type: FETCH_USER,
        //   payload: {
        //     data: { name: "Jhon Martinillo", email: "soyhhh@soyJhoni" }
        //   }
        // });
        // dispatch({ type: SET_LOADER, payload: { play: false } });
      });
  };
};

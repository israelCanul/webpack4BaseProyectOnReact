import ApiRoyal from "../api/index.js";
import { SET_LOADER } from "./index.js";

export const SET_FORM = "SET_FORM";
export const GET_FORM = "SET_FORM";

export const setForm = obj => {
  console.log(obj);

  return async function(dispatch) {
    var config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    };
    dispatch({
      type: SET_LOADER,
      payload: { play: true, text: "Sending information" }
    });
    const response = await ApiRoyal.post("/setForm", obj)
      .then(res => {
        dispatch({ type: SET_FORM, payload: res });
        setTimeout(() => {
          dispatch({ type: SET_LOADER, payload: { play: false } });
        }, 1000);
      })
      .catch(err => {
        dispatch({ type: SET_FORM, payload: err });
        dispatch({ type: SET_LOADER, payload: { play: false } });
      });
  };
};

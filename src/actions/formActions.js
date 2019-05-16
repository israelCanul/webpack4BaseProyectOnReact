import ApiRoyal from "../api/index.js";
import { SET_LOADER } from "./index.js";
import { SET_NOTIFICATION } from "./notificationsActions";

export const SET_FORM = "SET_FORM";
export const GET_FORM = "GET_FORM";
export const FETCH_FORM = "FETCH_FORM";

export const fetchForms = code => {
  return async function(dispatch) {
    var config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data"
      }
    };
    dispatch({
      type: SET_LOADER,
      payload: { play: true, text: "Fetching Forms" }
    });

    const response = await ApiRoyal.get("/forms")
      .then(res => {
        dispatch({ type: FETCH_FORM, payload: res.data });
        setTimeout(() => {
          dispatch({ type: SET_LOADER, payload: { play: false } });
        }, 1000);
      })
      .catch(err => {
        dispatch({ type: SET_LOADER, payload: { play: false } });
      });
  };
};

export const setForm = obj => {
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
          dispatch({
            type: SET_NOTIFICATION,
            payload: { code: res.data.code, description: res.data.resp }
          });
        }, 1000);
      })
      .catch(err => {
        dispatch({ type: SET_FORM, payload: err });
        dispatch({ type: SET_LOADER, payload: { play: false } });
      });
  };
};

export const getForm = code => {
  return async function(dispatch) {
    var config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data"
      }
    };
    dispatch({
      type: SET_LOADER,
      payload: { play: true, text: "Fetching information" }
    });

    const form = new FormData();
    form.append("form", code + "");

    const response = await ApiRoyal.post("/getForm", form)
      .then(res => {
        if (res.data.form) {
          dispatch({ type: GET_FORM, payload: res.data });
          // dispatch({
          //   type: SET_NOTIFICATION,
          //   payload: { code: 1, description: "Successfully" }
          // });
        } else {
          dispatch({
            type: SET_NOTIFICATION,
            payload: { code: -1, description: "The form does'nt exist" }
          });
        }
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

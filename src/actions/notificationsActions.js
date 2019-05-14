export const DELETE_NOTIFICATION = "DELETE_NOTIFICATION";
export const SET_NOTIFICATION = "SET_NOTIFICATION";

// Action Creator
export const setNotification = (c, d) => {
  return {
    type: SET_NOTIFICATION,
    payload: { code: c, description: d }
  };
};
export const deleteNotification = id => {
  return {
    type: DELETE_NOTIFICATION,
    payload: id
  };
};

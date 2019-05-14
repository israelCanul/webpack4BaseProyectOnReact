import {
  DELETE_NOTIFICATION,
  SET_NOTIFICATION
} from "../actions/notificationsActions.js";
// import _ from "lodash";

const initialState = {
  notifications: []
};

var _ = null;
const ldash = (async () => {
  let response = await (() => {
    return import(/* webpackChunkName: "lodash" */ "lodash").then(module => {
      return module;
    });
  })();
  _ = response;
})();

export const notificationsReducer = (state = initialState, action) => {
  var newState = { ...state };
  switch (action.type) {
    case SET_NOTIFICATION:
      {
        newState.notifications.push(action.payload);
      }
      break;
    case DELETE_NOTIFICATION:
      {
        let newNotifications = _.compact(
          _.remove(newState.notifications, function(notification, index) {
            if (index != action.payload) {
              return notification;
            }
          })
        );
        newState = { ...newState, notifications: newNotifications };
      }
      break;
    default:
      newState = newState;
  }
  //   newState = { ...newState, pause: true, open: true };
  return newState;
};

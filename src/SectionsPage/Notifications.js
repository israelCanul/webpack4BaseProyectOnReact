import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteNotification } from "../actions/notificationsActions.js";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.renderNotifications = this.renderNotifications.bind(this);
  }
  delete(id, evt) {
    evt.preventDefault();
    this.props.deleteNotification(id);
  }
  renderNotifications() {
    return this.props.notifications.notifications.map((notification, id) => {
      return (
        <div
          key={`notification-${id}`}
          className={`notification ${
            notification.code > 0
              ? "is-info"
              : notification.code == 0
              ? "is-warning"
              : "is-danger"
          }`}
        >
          <button onClick={this.delete.bind(this, id)} className="delete" />
          {notification.description}
        </div>
      );
    });
  }
  deleteNotification(evt) {}
  render() {
    return (
      <div className="wrapNotifications">
        <div className="content">
          {this.props.notifications.notifications && this.renderNotifications()}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    notifications: state.notifications
  };
}

export default connect(
  mapStateToProps,
  { deleteNotification }
)(Notifications);

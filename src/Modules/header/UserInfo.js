import React, { Component } from "react";

class UserInfoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heightCardUserInfo: 0
    };
    this.toggleCardUser = this.toggleCardUser.bind(this);
  }
  componentDidMount() {
    // getLodash().then(res => {});
    this.setState({ heightCardUserInfo: this.cardUser.clientHeight });
    this.cardUser.style.height = this.cardUser.clientHeight + "px";
    this.cardUser.className = this.cardUser.className + " noActive";
  }
  toggleCardUser(e) {
    window.nRoyal.toggleClass(this.cardUser, "noActive");
  }
  render() {
    return (
      <div className="navbar-item is-hoverable userInfo">
        {window.nRoyal.CheckUserOnCookies() ? (
          <figure className="image is-32x32 " onClick={this.toggleCardUser}>
            <img
              style={{ maxHeight: "32px" }}
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        ) : (
          <div className="buttons">
            <a className="button is-primary">Log in</a>
          </div>
        )}
        <div className="card card-user" ref={e => (this.cardUser = e)}>
          <header className="card-header">
            <p className="card-header-title">Component</p>
            <a href="#" className="card-header-icon" aria-label="more options">
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true" />
              </span>
            </a>
          </header>
          <div className="card-content">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a>{" "}
              <a href="#">#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              Save
            </a>
            <a href="#" className="card-footer-item">
              Edit
            </a>
            <a href="#" className="card-footer-item">
              Delete
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

// const getLodash = () => {
//   return import(/* webpackChunkName: "lodash" */ "lodash");
// };

export default UserInfoItem;

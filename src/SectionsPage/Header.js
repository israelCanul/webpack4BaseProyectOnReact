import React, { Component, Suspense } from "react";
// import UserInfo from "../Modules/header/UserInfo";
const UserInfoComponent = React.lazy(() =>
  import("./../Components/Modules/header/UserInfo")
);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header ref="header" className="header">
        <div className="header-wrap">
          <div className="header-wrap-icon">
            <a
              href="#"
              className="icon-large"
              onClick={this.toggleSideBar.bind(this)}
            >
              <span className="icon-large">Royal Resorts</span>
              <span className="icon-small">RR</span>
            </a>
            <a
              onClick={this.toggleSideBar.bind(this)}
              role="button"
              className="navbar-burger icon-small"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className="header-wrap-container">
            <nav
              className="navbar"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <a className="navbar-item" href="#">
                  <img src="https://www.royalresorts.com/wp-content/uploads/2016/01/Royal-Resorts-Logo.png" />
                </a>
                <a
                  onClick={this.toggleSideBar.bind(this)}
                  role="button"
                  className="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </a>
              </div>
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                  <Suspense fallback={<div>Loading...</div>}>
                    <UserInfoComponent />
                  </Suspense>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
  toggleSideBar(e) {
    e.preventDefault();
    // window.nRoyal.toggleClass(
    //   document.getElementsByTagName("body")[0],
    //   "sidebar-collapse"
    // );
    window.nRoyal.toggleClass(
      document.getElementsByTagName("body")[0],
      "sidebar-open"
    );
  }
  componentWillMount() {}
  componentDidMount() {
    console.log("cargo");
  }
}

export default Header;

import React, { Component, Suspense } from "react";
// import UserInfo from "../Modules/header/UserInfo";
const UserInfoComponent = React.lazy(() =>
  import("./../Modules/header/UserInfo")
);

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="header">
        <div className="header-wrap">
          <div className="header-wrap-icon">
            <a href="#" onClick={this.toggleSideBar.bind(this)}>
              <span className="icon-large">Royal Resorts</span>
              <span className="icon-small">RR</span>
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
    let body = document.getElementsByTagName("body")[0];
    let newClases = "";
    let thereisidebarcollapse = false;
    Object.keys(body.classList).map(id => {
      if (body.classList[id] == "sidebar-collapse") {
        thereisidebarcollapse = true;
      } else {
        newClases += body.classList[id] + " ";
      }
    });

    if (thereisidebarcollapse == false) {
      document.getElementsByTagName("body")[0].className += "sidebar-collapse ";
    } else {
      document.getElementsByTagName("body")[0].className = newClases;
    }
  }
  componentWillMount() {}
  componentDidMount() {}
}

export default About;

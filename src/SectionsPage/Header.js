import React, { Component } from "react";

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
            <a href="http://">
              <span className="icon-small">NR</span>
              <span className="icon-large">Narilearsi</span>
            </a>
          </div>
          <div className="header-wrapp-container">
            {/* <nav
              className="navbar"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                  <img
                    src="https://bulma.io/images/bulma-logo.png"
                    width="112"
                    height="28"
                  />
                </a>
                <a role="button" className="navbar-item navbar-burger burger" />
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
            </nav> */}
          </div>
        </div>
      </header>
    );
  }
  componentWillMount() {}
  componentDidMount() {}
}

export default About;

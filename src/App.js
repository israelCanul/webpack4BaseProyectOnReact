import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./Routes";

/** SECTIONS */
import Header from "./SectionsPage/Header";

import "../scss/index.scss";

// import { initFrame } from "./helpers/UserAdmin";
// initFrame(); //inicializamos el framework
const ng = import(/* webpackChunkName: "framework" */ "./helpers/UserAdmin");
ng.then(res => {
  res.initFrame();
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          <footer className="footer">
            <div className="content has-text-centered">
              <p>
                <strong>Narilearsi</strong> by{" "}
                <a href="https://jgthms.com">Jeremy Thomas</a>. The source code
                is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
                . The website content is licensed{" "}
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                  CC BY NC SA 4.0
                </a>
                .
              </p>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default hot(module)(App);

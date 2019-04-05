import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./Routes";

/** Importando la hoja de estilos Bulma.css */
import "../node_modules/bulma-start/css/main.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>adsasd</div>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
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

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "../Routes";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div ref="content" className="appContent">
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    );
  }
  componentWillMount() {}
  componentDidMount() {}
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

export default Wrapper;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class FormsHome extends Component {
  render() {
    return (
      <div id="formAdmin">
        {this.props.routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    );
  }
}
function RouteWithSubRoutes(route) {
  return <Route path={route.path} component={route.component} />;
}

export default FormsHome;

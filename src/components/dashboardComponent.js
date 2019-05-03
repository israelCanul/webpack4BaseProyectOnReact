import React, { Component } from "react";

class ComponentDefault extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="panel Dashboard-Default">
        {/* <div className="panel-heading">Titulo</div> */}
        <div className="panel-block">contenid</div>
      </div>
    );
  }
}

export default ComponentDefault;

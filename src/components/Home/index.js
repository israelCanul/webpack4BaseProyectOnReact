import React, { Suspense, Component } from "react";
import ComponentsDefault from "../dashboardComponent";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cargado: false
    };
  }
  render() {
    return (
      <div className="dashboard">
        <div className="panelWrappers">
          <ComponentsDefault />
          <ComponentsDefault />
          <ComponentsDefault />
        </div>
      </div>
    );
  }
  componentWillMount() {}
  componentDidMount() {
    var heightHeader = document.getElementById("header");
    var heightFooter = document.getElementById("footer");
    var documentHeigth = window.innerHeight;
    if (heightHeader != null) {
      console.log(heightHeader.clientHeight);
    }
    if (heightFooter != null) {
      console.log(heightFooter.clientHeight);
    }
  }
}

export default Content;

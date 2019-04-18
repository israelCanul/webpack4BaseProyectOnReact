import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

/** SECTIONS */
import Header from "./SectionsPage/Header";
import Footer from "./SectionsPage/footer";
import Aside from "./SectionsPage/AsideMenu";
import Wrapper from "./SectionsPage/Wrapper";

/** REDUX */
import { fetchUser } from "./actions";
import { connect } from "react-redux";

import "../scss/index.scss";

const ng = import(/* webpackChunkName: "framework" */ "./helpers/UserAdmin");
ng.then(res => {
  res.initFrame();
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header ref={ref => (this.Header = ref)} />
          <Wrapper ref={ref => (this.Wrapper = ref)} />
          <Aside />
          <Footer ref={ref => (this.Footer = ref)} id="footer" />
        </div>
      </Router>
    );
  }
  componentDidMount() {
    this.props.fetchUser();
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    var hH = 0,
      hF = 0;
    if (this.Header != null) {
      hH = this.Header.refs.header.clientHeight;
    }
    if (this.Footer != null) {
      hF = this.Footer.refs.footer.clientHeight;
    }
    this.Wrapper.refs.content.style.height =
      parseInt(parseInt(window.innerHeight) - parseInt(hH) - parseInt(hF)) +
      "px";
  }
}

export default connect(
  null,
  { fetchUser }
)(App);

// var heightHeader = document.getElementById("header");
// var heightFooter = document.getElementById("footer");
// var documentHeigth = window.innerHeight;
// if (heightHeader != null) {
//   console.log(heightHeader.clientHeight);
// }
// if (heightFooter != null) {
//   console.log(heightFooter.clientHeight);
// }

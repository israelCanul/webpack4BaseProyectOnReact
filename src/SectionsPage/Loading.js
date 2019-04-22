import React, { Component } from "react";
import { connect } from "react-redux";

class GlobalLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
      isPaused: false
    };
  }
  componentDidMount() {
    bodymovin.loadAnimation({
      container: this.element, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/skeleton-loading.json" // the path to the animation json
    });
  }
  render() {
    console.log(this.props.loader);

    let isOpen = this.props.loader.open === true ? "open" : "";
    return (
      <div id="GlobalLoaderContainer" className={` ${isOpen} `}>
        <div className="wrapContent">
          <div id="#element" ref={ref => (this.element = ref)} />
          <p className="is-size-5 has-text-link has-text-centered">
            {this.props.loader.text}
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loader: state.loader
  };
};
export default connect(mapStateToProps)(GlobalLoader);

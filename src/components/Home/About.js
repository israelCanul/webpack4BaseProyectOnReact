import React, { Suspense, Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cargado: false
    };
  }
  render() {
    return (
      <div className="About">
        <div>este es mi About y mi div.about</div>
      </div>
    );
  }
  componentWillMount() {}
  componentDidMount() {}
}

export default About;

import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer ref="footer" className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Narilearsi</strong> by{" "}
          </p>
        </div>
      </footer>
    );
  }
  componentWillMount() {}
  componentDidMount() {}
}

export default Footer;

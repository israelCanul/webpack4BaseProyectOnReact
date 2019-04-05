import React, { Suspense, Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cargado: false
    };
  }
  render() {
    return (
      <div className="App">
        <div>este es mi home y mi div.home</div>
      </div>
    );
  }
  componentWillMount() {}
  componentDidMount() {}
}

export default App;

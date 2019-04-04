import React, { Suspense, Component } from "react";
import "./App.css";
import { hot } from "react-hot-loader";

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
        <form
          method="post"
          encType="multipart/form-data"
          action="http://localhost:5001/api/files/UploadFiles"
        >
          <div className="form-group">
            <div className="col-md-10">
              <p>Upload one or more files using this form:</p>
              <input type="file" name="files" multiple />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-10">
              <input type="submit" value="Upload" />
            </div>
          </div>
        </form>
      </div>
    );
  }
  componentWillMount() {}
  componentDidMount() {}
}

export default hot(module)(App);

import React, { Suspense, Component } from "react";

import { hot } from "react-hot-loader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cargado: false,
      srcImagen: ""
    };
  }
  render() {
    return (
      <div className="App">
        {/* <div className="form-group">
          <div className="col-md-10">
            <p>Upload one or more files using this form:</p>
            <form
              method="post"
              action="https://localhost:5001/api/values/upload"
            >
              <input
                onChange={this.compres.bind(this)}
                type="file"
                name="files"
                multiple
              />
              <img
                ref={e => (this.preview = e)}
                src={this.state.srcImagen}
                height="500"
                alt="Image preview..."
              />
              <input type="submit" value="enviar" />
            </form>
          </div>
          <img
            ref={e => (this.preview = e)}
            src={this.state.srcImagen}
            height="500"
            alt="Image preview..."
          />
          <img
            ref={e => (this.imagen = e)}
            height="500"
            alt="Image preview..."
          />
        </div> */}
      </div>
    );
  }
  // compres(e) {
  //   let that = this;
  //   const reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);

  //   var quality = 80;
  //   var output_format = "jpg";

  //   reader.addEventListener("load", function() {
  //     that.setState({ srcImagen: reader.result });

  //     setTimeout(function() {
  //       console.log("preview ");
  //       console.dir(that.preview);
  //       that.imagen.src = jic.compress(
  //         that.preview,
  //         quality,
  //         output_format
  //       ).src;
  //       console.log("compresed ");
  //       console.dir(that.imagen);
  //     }, 1000);
  //   });
  // }
  // componentWillMount() {}
  // componentDidMount() {}
}

export default hot(module)(App);

import React, { Suspense, Component } from "react";
import "./App.css";
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
        <div className="form-group">
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
        </div>
      </div>
    );
  }
  compres(e) {
    // let width = 600;
    // let height = 600;
    let that = this;
    // const reader = new FileReader();
    // reader.readAsDataURL(e.target.files[0]);
    // const img = new Image();

    // reader.addEventListener(
    //   "load",
    //   function() {
    //     console.log(reader.result);
    //     that.setState({ srcImagen: reader.result });
    //     const elem = that.canvas;
    //     elem.width = width;
    //     elem.height = height;
    //     const ctx = elem.getContext("2d");
    //     img.src = reader.result;
    //     console.log(img);
    //     ctx.drawImage(img, 0, 0);
    //     ctx.canvas.toBlob(
    //       blob => {
    //         console.log(blob); //output image as a blob
    //         const file = new File([blob], "miarchivo", {
    //           type: "image/jpeg",
    //           lastModified: Date.now()
    //         }); //output image as a file
    //         console.log(file);

    //         var a = window.document.createElement("a");
    //         a.href = window.URL.createObjectURL(blob);
    //         a.download = "test.jpg";

    //         // Append anchor to body.
    //         document.body.appendChild(a);
    //         a.click();
    //       },
    //       "image/jpeg",
    //       1
    //     );
    //   },
    //   false
    // );
    var source_img = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    var quality = 80;
    // output file format (jpg || png || webp)
    var output_format = "jpg";
    //This function returns an Image Object

    reader.addEventListener("load", function() {
      that.setState({ srcImagen: reader.result });

      setTimeout(function() {
        console.log("preview ");
        console.dir(that.preview);
        that.imagen.src = jic.compress(
          that.preview,
          quality,
          output_format
        ).src;
        console.log("compresed ");
        console.dir(that.imagen);
      }, 1000);
    });
  }
  componentWillMount() {}
  componentDidMount() {}
}

export default hot(module)(App);

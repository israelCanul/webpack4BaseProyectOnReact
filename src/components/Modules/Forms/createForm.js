import React, { Component, Suspense } from "react";

const ReactJson = React.lazy(() => import("react-json-view"));
const InputItem = React.lazy(() => import("./formInputItem.js"));
const SelectItem = React.lazy(() => import("./formSelectItem.js"));
import { connect } from "react-redux";
import { setForm, getForm } from "../../../actions/formActions.js";

var _ = null;
const ldash = (async () => {
  let response = await (() => {
    return import(/* webpackChunkName: "lodash" */ "lodash").then(module => {
      return module;
    });
  })();
  _ = response;
})();

class CreateForm extends Component {
  constructor(props) {
    super(props);
    let randomVar = this.props.match.params.code
      ? this.props.match.params.code
      : [...Array(10)].map(i => (~~(Math.random() * 36)).toString(36)).join("");
    this.state = {
      openDropdown: false,
      previewActive: false,
      name: "",
      code: randomVar,
      formItems: [],
      formString: {
        name: "",
        code: randomVar,
        formulario: { form: { action: "#", type: "post", title: "Default" } },
        data: []
      }
    };
    this.readFormItems = this.readFormItems.bind(this);
    this.removeInput = this.removeInput.bind(this);
    this.onBlurButtonAddControl = this.onBlurButtonAddControl.bind(this);
    this.sendFormToApi = this.sendFormToApi.bind(this);
  }
  componentDidMount() {
    var that = this;
    // this.updateFormString();
    //this.setState({ formString: this.state.formString });
    if (this.props.match.params.code) {
      var respuesta = this.props.getForm(this.props.match.params.code);
      respuesta.then(res => {
        if (this.props.forms.form != null) {
          console.log(this.props.forms.form);
          this.setState({
            formString: {
              ...this.state.formString,
              data: this.props.forms.form.data,
              formulario: {
                ...this.state.formString.formulario,
                form: this.props.forms.form.form
              }
            }
          });
          let newItems = [];
          this.props.forms.form.data.map((dat, index) => {
            if (dat.input) {
              var ref = parseInt(index + 1) + "-Input";
              newItems.push(
                <InputItem
                  key={ref}
                  remove={that.removeInput}
                  idInput={index}
                  readItems={that.readFormItems}
                />
              );
            }
            if (dat.select) {
            }
          });

          this.setState({ formItems: newItems });
        }
      });
    }
  }
  removeInput(evt) {
    let idFormString = null;
    let newFormItems = _.compact(
      _.remove(this.state.formItems, function(n, index) {
        if (evt.props.idInput != n.props.idInput) {
          return n;
        } else {
          idFormString = index;
        }
      })
    );
    let newFormString = _.compact(
      _.remove(this.state.formString.data, function(n, index) {
        if (index != idFormString) {
          return n;
        }
      })
    );
    this.setState({
      formItems: newFormItems,
      formString: { ...this.state.formString, data: newFormString }
    });
  }
  addNewInput(evt) {
    evt.preventDefault();
    var newformItems = this.state.formItems;
    var ref = parseInt(newformItems.length + 1) + "-Input";
    newformItems.push(
      <InputItem
        key={ref}
        remove={this.removeInput}
        idInput={newformItems.length}
        readItems={this.readFormItems}
      />
    );
    /*** SE CREA EL DATA  Y SE AGREGA AL JSON  */
    let inputData = {
      input: {
        label: "",
        type: "text",
        value: "",
        name: ""
      }
    };
    let newFormString = this.state.formString;
    newFormString.data.push(inputData);
    this.setState({
      openDropdown: false,
      formItems: newformItems,
      formString: { ...newFormString }
    });
  }
  addNewSelect(evt) {
    evt.preventDefault();
    var newformItems = this.state.formItems;
    var ref = parseInt(newformItems.length + 1) + "-Input";
    newformItems.push(
      <SelectItem
        key={ref}
        remove={this.removeInput}
        idInput={newformItems.length}
        readItems={this.readFormItems}
      />
    );
    /*** SE CREA EL DATA  Y SE AGREGA AL JSON  */
    let inputData = {
      select: {
        label: "",
        value: "",
        options: []
      }
    };
    let newFormString = this.state.formString;
    newFormString.data.push(inputData);

    this.setState({
      openDropdown: false,
      formItems: newformItems,
      formString: { ...newFormString }
    });
  }
  readFormItems(a) {
    let newFormString = this.state.formString;
    let key = null;
    Object.keys(newFormString.data[a.props.idInput]).map(keyID => {
      key = keyID;
    });
    if (key != null) {
      newFormString.data[a.props.idInput][key] = a.state;
      this.setState({ formString: { ...newFormString } });
    }
  }
  changeTypeForm(evt) {
    this.setState({
      formString: {
        ...this.state.formString,
        formulario: {
          ...this.state.formString.formulario,
          form: {
            ...this.state.formString.formulario.form,
            type: evt.target.value
          }
        }
      }
    });
  }
  toggleDropdown(e) {
    if (this.state.openDropdown == true) {
      this.setState({ openDropdown: false });
    } else {
      this.setState({ openDropdown: true });
    }
  }
  onBlurButtonAddControl(e) {
    let that = this;
    setTimeout(() => {
      that.setState({ openDropdown: false });
    }, 500);
  }
  togglePreviewActive(evt) {
    if (this.state.previewActive == true) {
      this.setState({ previewActive: false });
    } else {
      this.setState({ previewActive: true });
    }
  }
  sendFormToApi(evt) {
    let objForm = {
      name: this.state.formString.name,
      code: this.state.formString.code,
      formulario: {
        ...this.state.formString.formulario,
        data: this.state.formString.data
      }
    };
    this.props.setForm(objForm);
  }
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="panel has-background-white">
            <div className="panel-heading">
              <div className="level">
                <div className="level-left">
                  <p>New Form </p>
                </div>
                <div className="level-right">
                  <a
                    onClick={this.togglePreviewActive.bind(this)}
                    className={`button ${this.state.previewActive == true &&
                      "is-active"}`}
                  >
                    <span>Preview</span>
                    <span className="icon">
                      {this.state.previewActive == true ? (
                        <i class="fas fa-eye-slash has-text-danger " />
                      ) : (
                        <i className="fas fa-eye has-text-primary" />
                      )}
                    </span>
                  </a>
                  <div
                    id="inputsDropdown"
                    className={`dropdown ${
                      this.state.openDropdown == true ? "is-active" : ""
                    }`}
                  >
                    <div className="dropdown-trigger">
                      <button
                        // ref={e => (this.buttonAddControl = e)}
                        onClick={this.toggleDropdown.bind(this)}
                        onBlur={this.onBlurButtonAddControl}
                        className="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                      >
                        <span>New </span>
                        <span className="icon is-small">
                          <i className="fas fa-ellipsis-v" />
                        </span>
                      </button>
                    </div>
                    <div
                      className="dropdown-menu"
                      id="dropdown-menu"
                      role="menu"
                    >
                      <div className="dropdown-content">
                        <a
                          href="#"
                          onClick={this.addNewInput.bind(this)}
                          className="dropdown-item"
                        >
                          Input Control
                        </a>

                        <a
                          onClick={this.addNewSelect.bind(this)}
                          href="#"
                          className="dropdown-item"
                        >
                          Select Control
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-block preview">
              <div
                className={`wrapper-preview ${this.state.previewActive ==
                  true && "active"}`}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <ReactJson src={this.state.formString}> </ReactJson>
                </Suspense>
              </div>
            </div>
            <div className="panel-block formConfiguration">
              <div className="columns has-background-light">
                <div className="column ">
                  <div className="field is-horizontal">
                    <label htmlFor="" className="label field-label">
                      Name
                    </label>
                    <div className="control field-body">
                      <input
                        className="input"
                        value={this.state.formString.formulario.form.title}
                        onChange={e => {
                          this.setState({
                            formString: {
                              ...this.state.formString,
                              formulario: {
                                form: {
                                  ...this.state.formString.formulario.form,
                                  title: e.target.value
                                }
                              },
                              name: e.target.value
                            }
                          });
                        }}
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <label htmlFor="" className="label field-label">
                      Type
                    </label>
                    <div className=" field-body">
                      <div className="control select">
                        <select
                          value={this.state.formString.formulario.form.type}
                          onChange={this.changeTypeForm.bind(this)}
                        >
                          <option value="post">Post</option>
                          <option value="get">Get</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-one-third">
                  <div className="field is-horizontal">
                    <label htmlFor="" className="label field-label">
                      Code
                    </label>
                    <div className="control field-body">
                      {this.props.match.params.code ? (
                        <input
                          disabled
                          defaultValue={this.state.code}
                          className="input"
                          type="text"
                          placeholder="Code"
                        />
                      ) : (
                        <input
                          onChange={e => {
                            this.setState({
                              formString: {
                                ...this.state.formString,
                                code: e.target.value
                              }
                            });
                          }}
                          defaultValue={this.state.code}
                          className="input"
                          type="text"
                          placeholder="Code"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="column is-one-third">
                  <div className="field is-horizontal">
                    <label htmlFor="" className="label field-label">
                      Action
                    </label>
                    <div className="control field-body">
                      <input
                        value={this.state.formString.formulario.form.action}
                        onChange={e => {
                          this.setState({
                            formString: {
                              ...this.state.formString,
                              formulario: {
                                ...this.state.formString.formulario,
                                form: {
                                  ...this.state.formString.formulario.form,
                                  action: e.target.value
                                }
                              }
                            }
                          });
                        }}
                        className="input"
                        type="text"
                        placeholder="Action"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-block has-background-light">
              <div className="form-content">
                <div className="columns">
                  <div className="column">
                    <div className="panel">
                      <div
                        className="panel-block"
                        style={{ borderWidth: "0px" }}
                      >
                        <div className="container itemsForm">
                          {this.state.formItems}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-block submit">
              <a
                onClick={this.sendFormToApi}
                className="button is-success is-hoverable"
                href="#"
              >
                Guardar
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { forms: state.forms };
}
export default connect(
  mapStateToProps,
  { setForm, getForm }
)(CreateForm);

import React, { Component, Suspense } from "react";
import { longStackSupport } from "q";
const ReactJson = React.lazy(() => import("react-json-view"));
const InputItem = React.lazy(() => import("./formInputItem.js"));
const SelectItem = React.lazy(() => import("./formSelectItem.js"));

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
    this.state = {
      name: "",
      code: [...Array(10)]
        .map(i => (~~(Math.random() * 36)).toString(36))
        .join(""),
      formItems: [],
      formString: {
        name: "",
        code: "",
        formulario: { form: { action: "#", type: "post", title: "Default" } },
        data: []
      },
      openDropdown: false
    };
    this.readFormItems = this.readFormItems.bind(this);
    this.removeInput = this.removeInput.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.onBlurButtonAddControl = this.onBlurButtonAddControl.bind(this);
  }
  componentDidMount() {
    // this.updateFormString();
    //this.setState({ formString: this.state.formString });
  }
  removeInput(evt) {
    let newFormString = _.compact(
      _.remove(this.state.formString.data, function(n, index) {
        if (index != evt.props.id) {
          return n;
        }
      })
    );
    let newFormItems = _.compact(
      _.remove(this.state.formItems, function(n, index) {
        if (index != evt.props.id) {
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
        id={newformItems.length}
        readItems={this.readFormItems}
      />
    );
    this.setState({ formItems: newformItems });
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

    this.setState({ formString: { ...newFormString } });
    this.setState({ openDropdown: false }); // cerramos el dropdown
  }
  addNewSelect(evt) {
    evt.preventDefault();
    var newformItems = this.state.formItems;
    var ref = parseInt(newformItems.length + 1) + "-Input";
    newformItems.push(
      <SelectItem
        key={ref}
        remove={this.removeInput}
        id={newformItems.length}
        readItems={this.readFormItems}
      />
    );
    this.setState({ formItems: newformItems });
    /*** SE CREA EL DATA  Y SE AGREGA AL JSON  */
    let inputData = {
      Select: {
        label: "",
        value: "",
        options: []
      }
    };
    let newFormString = this.state.formString;
    newFormString.data.push(inputData);

    this.setState({ formString: { ...newFormString } });
    this.setState({ openDropdown: false }); // cerramos el dropdown
  }
  readFormItems(a) {
    let newFormString = this.state.formString;
    newFormString.data[a.props.id] = a.state;
    this.setState({ formString: { ...newFormString } });
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
                  <div
                    id="inputsDropdown"
                    className={`dropdown ${this.state.openDropdown == true &&
                      "is-active"}`}
                  >
                    <div className="dropdown-trigger">
                      <button
                        ref={e => (this.buttonAddControl = e)}
                        onClick={this.toggleDropdown}
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
                        onChange={e => {
                          this.setState({
                            formString: {
                              ...this.state.formString,
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
                        <select onChange={this.changeTypeForm.bind(this)}>
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
                      {/* <div className="panel-heading has-background-white">
                        <div className="columns">
                          <div className="column buttonInputs">
                            <a href="" className="button is-info">
                              <span>Add New Input</span>
                              <span className="icon">
                                <i className="far fa-plus-square" />
                              </span>
                            </a>
                          </div>
                          <div className="column buttonInputs">
                            <a
                              href=""
                              onClick={this.addNewSelect.bind(this)}
                              className="button is-info"
                            >
                              <span>Add New Select</span>
                              <span className="icon">
                                <i className="far fa-plus-square" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div> */}
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
            {/* <div className="panel-block">
              <Suspense fallback={<div>Loading...</div>}>
                <ReactJson src={this.state.formString}> </ReactJson>
              </Suspense>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CreateForm;

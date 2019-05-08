import React, { Component } from "react";

class SelectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.labelIn ? this.props.labelIn : "",
      value: this.props.valueIn ? this.props.valueIn : "",
      options: this.props.optionsIn ? this.props.optionsIn : []
    };
    this.AddOption = this.AddOption.bind(this);
  }
  changeInputLabel(evt) {
    let that = this;
    this.setState({ label: evt.target.value });
    setTimeout(() => {
      that.props.readItems(this);
    }, 100);
  }
  changeInputName(evt) {
    let that = this;
    this.setState({ name: evt.target.value });
    setTimeout(() => {
      that.props.readItems(this);
    }, 100);
  }
  changeInputValue(evt) {
    let that = this;
    this.setState({ value: evt.target.value });
    setTimeout(() => {
      that.props.readItems(this);
    }, 100);
  }
  changeInputType(evt) {
    let that = this;
    this.setState({ type: evt.target.value });
    setTimeout(() => {
      that.props.readItems(this);
    }, 100);
  }
  AddOption(evt) {
    console.log("asdada");
    this.setState({
      options: [
        ...this.state.options,
        {
          Name: "Option1",
          Value: "value1"
        }
      ]
    });
  }
  render() {
    // var options = this.state.options.map((option, id) => {
    //   console.log("====================================");
    //   console.log(option);
    //   console.log("====================================");
    // });
    return (
      <div className="itemForm type-form card SelectControl">
        <div className="card-header">
          <div className="card-header-title ">SELECT-FORM</div>
          <div className="card-header-icon">
            <span className="icon has-text-danger">
              <i
                onClick={e => this.props.remove(this)}
                className="far fa-trash-alt"
              />
            </span>
          </div>
        </div>
        <div className="card-content">
          <div className="itemForm-content">
            <div className="itemForm-content-field first-row ">
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label has-text-grey" htmlFor="">
                    Label
                  </label>
                </div>
                <div className="field-body">
                  <div className="control">
                    <input
                      type="text"
                      onChange={this.changeInputLabel.bind(this)}
                      defaultValue={this.state.label}
                      className="input"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="itemForm-content-field first-row ">
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label has-text-grey" htmlFor="">
                    Value
                  </label>
                </div>
                <div className="field-body">
                  <div className="control select">
                    <select
                      onChange={this.changeInputType.bind(this)}
                      defaultValue={this.state.type}
                    >
                      <option value="">Without value selected</option>
                      {/* {this.state.options.map((option, index) => {
                        return (
                          <option
                            key={`opciones-${index}`}
                            value={option.Value}
                          >
                            {option.Name}
                          </option>
                        );
                      })} */}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="options-section">
              <div className="options-section-header level">
                <div className="level-right">
                  <a
                    onClick={this.AddOption}
                    href="#"
                    className="button has-background-light has-text-primary is-size-6"
                  >
                    {/* <span>New Option</span> */}
                    <span className="icon">
                      <i className="far fa-plus-square" />
                    </span>{" "}
                  </a>
                </div>
              </div>
              <div className="actions" />
              <div className="options-section-content">
                <table style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th>Label</th>
                      <th>action</th>
                      <th>
                        <i className="fas fa-ellipsis-v" />
                      </th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SelectItem;

import React, { Component } from "react";

class InputItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.labelIn ? this.props.labelIn : "",
      type: "text",
      value: this.props.valueIn ? this.props.valueIn : "",
      name: this.props.nameIn ? this.props.nameIn : ""
    };
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
  render() {
    return (
      <div className="itemForm type-form card">
        <div className="card-header">
          <div className="card-header-title ">INPUT-FORM</div>
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
                    Type
                  </label>
                </div>
                <div className="field-body">
                  <div className="control">
                    <div className="select">
                      <select
                        onChange={this.changeInputType.bind(this)}
                        defaultValue={this.state.type}
                      >
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="email">Email</option>
                        <option value="tel">Tel</option>
                        <option value="date">Date</option>
                        <option value="hidden">Hidden</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemForm-content-field">
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label has-text-grey" htmlFor="">
                    Name
                  </label>
                </div>
                <div className="field-body">
                  <div className="control">
                    <input
                      onChange={this.changeInputName.bind(this)}
                      type="text"
                      defaultValue={this.state.name}
                      className="input"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="itemForm-content-field">
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label has-text-grey" htmlFor="">
                    Value
                  </label>
                </div>
                <div className="field-body">
                  <div className="control">
                    <input
                      onChange={this.changeInputValue.bind(this)}
                      type="text"
                      defaultValue={this.state.value}
                      className="input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InputItem;

import React, { Component } from "react";

class SelectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.item ? this.props.item.label : "",
      value: this.props.item ? this.props.item.value : "",
      options: this.props.item ? this.props.item.options : []
    };
    this.AddOption = this.AddOption.bind(this);
    // this.changeOptionLabel = this.changeOptionLabel.bind(this);
  }
  changeInputLabel(evt) {
    let that = this;
    this.setState({ label: evt.target.value });
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

  changeOptionLabel(id, evt) {
    let that = this;
    let newOptions = this.state.options;
    newOptions[id] = {
      ...newOptions[id],
      Name: evt.target.value
    };

    this.setState({ options: newOptions });
    this.setState({ value: "" });
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
  changeOptionValue(id, evt) {
    let that = this;
    let newOptions = this.state.options;
    newOptions[id] = {
      ...newOptions[id],
      Value: evt.target.value
    };

    this.setState({ options: newOptions });
    this.setState({ value: "" });
    setTimeout(() => {
      that.props.readItems(this);
    }, 100);
  }
  removeOpption(id, evt) {
    let newOptions = [];
    var that = this;
    this.state.options.map((option, index) => {
      if (id != index) {
        newOptions.push(option);
      }
    });
    this.setState({ options: [...newOptions] });
    this.setState({ value: "" });
    setTimeout(() => {
      that.props.readItems(this);
    }, 100);
  }
  AddOption(evt) {
    var that = this;
    let id = [...Array(10)]
      .map(i => (~~(Math.random() * 36)).toString(36))
      .join("");
    this.setState({
      options: [
        ...this.state.options,
        {
          id: id,
          Name:
            "default" +
            [...Array(3)]
              .map(i => (~~(Math.random() * 36)).toString(36))
              .join(""),
          Value: id
        }
      ]
    });
    setTimeout(() => {
      that.props.readItems(this);
    }, 100);
  }
  render() {
    var options = [];
    let that = this;
    let className = "";
    this.state.options.map((option, id) => {
      if (option.Value == that.state.value) {
        className = "has-background-grey-lighter";
      } else {
        className = "";
      }
      options.push(
        <tr className={className} key={option.id}>
          <td className="control">
            <input
              maxLength="15"
              className="input"
              onChange={this.changeOptionLabel.bind(this, id)}
              type="text"
              defaultValue={option.Name}
            />
          </td>
          <td className="control">
            <input
              maxLength="15"
              className="input"
              type="text"
              onChange={this.changeOptionValue.bind(this, id)}
              defaultValue={option.Value}
            />
          </td>
          <td>
            <a onClick={this.removeOpption.bind(this, id)} href="#">
              <span className="icon">
                <i className="fas fa-trash has-text-danger" />
              </span>
            </a>
          </td>
        </tr>
      );
    });

    let optionsSelect = [];
    optionsSelect.push(
      <option key={`opciones-0`} value="">
        Without value selected
      </option>
    );
    this.state.options.map((option, index) => {
      optionsSelect.push(
        <option key={`opciones-${index + 1}`} value={option.Value}>
          {option.Name}
        </option>
      );
    });

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
                      onChange={this.changeInputValue.bind(this)}
                      //defaultValue={this.state.type}
                      value={this.state.value}
                    >
                      {optionsSelect}
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
                <table className="table" style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th>Label</th>
                      <th>Value</th>
                      <th>
                        <i className="fas fa-ellipsis-v" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>{options}</tbody>
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

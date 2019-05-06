import React, { Component } from "react";

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      code: "",
      formItems: [],
      formString: ""
    };
  }
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="panel has-background-white">
            <p className="panel-heading">New Form</p>
            <div className="panel-block">
              <div class="columns">
                <div className="column">
                  <div className="field is-horizontal">
                    <label htmlFor="" className="label field-label">
                      Name
                    </label>
                    <div className="control field-body">
                      <input class="input" type="text" placeholder="Name" />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="field is-horizontal">
                    <label htmlFor="" className="label field-label">
                      Code
                    </label>
                    <div className="control field-body">
                      <input class="input" type="text" placeholder="Code" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-block">
              <div className="form-content">
                <div className="columns">
                  <div className="column">
                    <div className="panel">
                      <div className="panel-heading has-background-white">
                        <a href="" className="button is-info">
                          <span>Add New </span>
                          <span class="icon">
                            {" "}
                            <i class="far fa-plus-square" />
                          </span>
                        </a>
                      </div>
                      <div className="panel-block">
                        <div className="container itemsForm">
                          <InputItem />
                          <InputItem />
                        </div>
                      </div>
                    </div>
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

const InputItem = ({}) => {
  return (
    <div className="itemForm type-form card">
      <div className="card-content">
        <div className="itemForm-content">
          <div className="itemForm-content-field">
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label" htmlFor="">
                  Label
                </label>
              </div>
              <div className="field-body">
                <div className="control">
                  <input type="text" value="sss" className="input" />
                </div>
              </div>
            </div>
          </div>
          <div className="itemForm-content-field">
            <div className="field is-horizontal">
              <label htmlFor="">Label</label>
              <div className="control">
                <input type="text" value="sss" className="input" />
              </div>
            </div>
          </div>
          <div className="itemForm-content-field">
            {" "}
            <div className="field is-horizontal">
              <label htmlFor="">Label</label>
              <div className="control">
                <input type="text" value="sss" className="input" />
              </div>
            </div>
          </div>
          <div className="itemForm-content-field">
            {" "}
            <div className="field is-horizontal">
              <label htmlFor="">Label</label>
              <div className="control">
                <input type="text" value="sss" className="input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchForms } from "../../../actions/formActions";

class ListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        type: "all", // all/public/private
        search: ""
      },
      optiones: [
        { name: "Contact US", active: true },
        { name: "Reservations", active: true },
        { name: "Spa", active: true },
        { name: "Otros", active: true }
      ]
    };
  }
  componentDidMount() {
    this.props.fetchForms();
  }
  render() {
    return (
      <div className="panel">
        <p className="panel-heading">Forms</p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input
              className="input is-small"
              type="text"
              placeholder="search"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>
          </p>
        </div>
        <p className="panel-tabs">
          <a className={` ${this.state.filters.type == "all" && "is-active"}`}>
            all
          </a>
          <a
            className={` ${this.state.filters.type == "public" && "is-active"}`}
          >
            public
          </a>
          <a
            className={` ${this.state.filters.type == "private" &&
              "is-active"}`}
          >
            private
          </a>
        </p>
        {this.props.forms.formList.map((option, index) => {
          return (
            <Link
              key={`form-${index}`}
              className="panel-block has-background-white"
              to={"/forms/Form/" + option.code}
            >
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true" />
              </span>
              <span style={{ flex: "1" }}>{option.name}</span>
              <span class="tag is-grey-dark">{option.timestamp}</span>
            </Link>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { forms: state.forms };
}

export default connect(
  mapStateToProps,
  { fetchForms }
)(ListForm);

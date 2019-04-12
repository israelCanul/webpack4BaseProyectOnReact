import React, { Component } from "react";
import ItemMenu from "../Modules/aside/itemMenu";

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <aside className="menu " id="MenuPrincipal">
        <div className="card user">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>
          </div>
        </div>

        <p className="menu-label">Administration </p>
        <ul className="menu-list">
          <li>
            <ItemMenu text="Contacts" textIcon="fas fa-address-book" />
          </li>
          <li>
            <ItemMenu text="Sections" textIcon="fab fa-microsoft" />
          </li>
        </ul>
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <ItemMenu text="Pages" textIcon="far fa-file-alt" />
          </li>
          <li>
            <ItemMenu text="Gallery" textIcon="far fa-images" />
          </li>
        </ul>
      </aside>
    );
  }
  componentWillMount() {}
  componentDidMount() {}
}

export default Aside;

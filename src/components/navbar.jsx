import React, { Component } from "react";
class NavBar extends Component {
  render() {
    const { itemsCount } = this.props;

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          NvBar
          <badge className="badge-pill badge-secondary">{itemsCount}</badge>
        </a>
      </nav>
    );
  }
}

export default NavBar;

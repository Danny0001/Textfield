import React, { Component } from 'react';
import './../../css/App.css'
//import DropdownProfile from './DropDownProfile.js'

class NavBar extends Component {
  render() {
    return (
      <div className="navBarboxN">
      <nav className="pt-navbar navBarSelfN">
    <div className="pt-navbar-group pt-align-left">
      <div className="pt-navbar-heading">Domergy</div>
      <input className="pt-input" placeholder="Search files..." type="text" />
    </div>
    <div className="pt-navbar-group pt-align-right">
      <button className="pt-button pt-minimal pt-icon-home">Home</button>
      <button className="pt-button pt-minimal pt-icon-document">Files</button>
      <span className="pt-navbar-divider"></span>
      <button className="pt-button pt-minimal pt-icon-user"></button>
      <button className="pt-button pt-minimal pt-icon-notifications"></button>
      <button className="pt-button pt-minimal pt-icon-cog"></button>
    </div>
  </nav>
  </div>
    );
  }
}

export default NavBar;

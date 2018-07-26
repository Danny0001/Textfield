import React, { Component } from 'react';
import './../../css/App.css'
import { Link } from "react-router-dom";
import DropDownProfileV2 from './DropDownProfileV2.js'

class NavBar extends Component {
  render() {
    return (
      <div className="navBarboxN ZIndex">
      <nav className="pt-navbar navBarSelfN">
    <div className="pt-navbar-group pt-align-left">
      <Link to="/Dashboard" className="homecolor">
      <div className="pt-navbar-heading">Domergy</div>
      </Link>
      <input className="pt-input" placeholder="Search files..." type="text" />
    </div>
    <div className="pt-navbar-group pt-align-right homecolor">
      <Link to="/Dashboard" className="homecolor">
      <button className="pt-button pt-minimal pt-icon-home WhiteColor">Home</button>
    </Link>
      <span className="pt-navbar-divider"></span>
      <DropDownProfileV2></DropDownProfileV2>
      <button className="pt-button pt-minimal pt-icon-notifications"></button>
      <button className="pt-button pt-minimal pt-icon-cog"></button>
    </div>
  </nav>
  </div>
    );
  }
}

export default NavBar;

import React, { Component } from 'react';
import './../../css/App.css'
import DropdownProfile from './DropDownProfile.js'
import {
  Button, Card, Elevation, Checkbox,Icon,
    Boundary,
    Breadcrumb,
    Classes,
    H5,
    IMenuItemProps,
    Label,
    Menu,
    MenuItem,
    OverflowList,
    Popover,
    Position,
    RadioGroup,
    Slider,
} from "@blueprintjs/core";
import { Example, handleStringChange, IExampleProps } from "@blueprintjs/docs-theme";

class NavBar extends Component {
  render() {
    return (
      <div className="navBarboxN">
      <nav class="pt-navbar navBarSelfN">
    <div class="pt-navbar-group pt-align-left">
      <div class="pt-navbar-heading">Domergy</div>
      <input class="pt-input" placeholder="Search files..." type="text" />
    </div>
    <div class="pt-navbar-group pt-align-right">
      <button class="pt-button pt-minimal pt-icon-home">Home</button>
      <button class="pt-button pt-minimal pt-icon-document">Files</button>
      <span class="pt-navbar-divider"></span>
      <button class="pt-button pt-minimal pt-icon-user"></button>
      <button class="pt-button pt-minimal pt-icon-notifications"></button>
      <button class="pt-button pt-minimal pt-icon-cog"></button>
    </div>
  </nav>
  </div>
    );
  }
}

export default NavBar;

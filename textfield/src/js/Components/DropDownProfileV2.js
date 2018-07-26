import React, { Component } from 'react';
import './../../css/App.css'
import { Link } from "react-router-dom";
import { Button, Card, Elevation, Checkbox,Icon } from "@blueprintjs/core";
import {
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
    FormGroup,
    InputGroup,
    FileInput,
} from "@blueprintjs/core";
import { Example, handleStringChange, IExampleProps } from "@blueprintjs/docs-theme";

class DropDownProfileV2 extends Component {

  render() {
    return (
      <div className="MenuProfile">
        <button className="pt-button pt-minimal pt-icon-user"></button>
        <div className="DropDownP2">
          <ul class="bp3-menu .modifier bp3-elevation-1">
            <Link to="/Profile">
            <li>
              <a class="bp3-menu-item pt-icon-user" tabindex="0">Your Profile</a>
            </li>
          </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default DropDownProfileV2;

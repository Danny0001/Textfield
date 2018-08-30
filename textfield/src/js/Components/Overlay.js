import React, { Component } from 'react';
import './../../css/App.css'
import NavBar from './NavBar.js'
import LeftNavBar from './LeftNavBar.js'
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

class Overlay extends Component {
  openTools() {
  var btn = document.getElementById('btnTools2');
  console.log("hola");
  var className = btn.className;

  if (className === "botonAct") {
      className = "botonAct open";
      document.getElementById('migration-Overlay').className = "CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer show active";
  }

  else {
      className = "botonAct";
      document.getElementById('migration-Overlay').className = "CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer";
  }

  btn.className = className;
}
  render() {
    return (
        <form id="migration-Overlay" className="CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer">
          <label onClick={this.openTools} className="close">x</label>
          <label>This Device is Not Conected...</label>
        </form>
    );
  }
}

export default Overlay;

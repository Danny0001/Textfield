import React, { Component } from 'react';
import axios from 'axios';
import classNames from "classnames";
import { Button, Classes, H5, Intent, Switch } from "@blueprintjs/core";
import './../../css/App.css'
import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme";
import Overlay from './Overlay.js'
const OVERLAY_EXAMPLE_CLASS = "docs-overlay-example-transition";


class InactiveButton extends React.Component
{
  openTools() {
  var btn = document.getElementById('btnTools2');
  console.log("hola");
  var className = btn.className;

  if (className === "botonAct") {
      className = "botonAct";
    document.getElementById('migration-Overlay').className = "CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer show active";
  }

  else {
      className = "botonAct";
    document.getElementById('migration-Overlay').className = "CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer ";
  }

  btn.className = className;
}
  render() {
    let botonAct = ["botonapp"];
    return (
      <div>
          <div id="buttonCont">
            <button id="btnTools2" onClick={this.openTools} className={botonAct.join(" ")}>OFF</button>
          </div>
      </div>
    );
  }
}
export default InactiveButton;

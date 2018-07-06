import React, { Component } from 'react';
import CuadroDispositivo from './CuadroDispositivo.js';
import './../../css/App.css'
import BarraMenu from './BarraMenu.js';
import CuadroCrearDisp from './CuadroCrearDisp.js';
import CuadroDispositivo2 from './CuadroDispositivo2.js';
import { Icon, Intent } from "@blueprintjs/core";
import { Button, Card, Elevation } from "@blueprintjs/core";
import { Classes, H5, Label, Slider, Switch } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

class ListadoDispositivos extends Component {

  render() {
    return (
      <div className="ListadoDispositivos">
        <BarraMenu></BarraMenu>
        <CuadroDispositivo2></CuadroDispositivo2>
        <CuadroDispositivo2></CuadroDispositivo2>
      </div>
    );
  }
}
export default ListadoDispositivos;

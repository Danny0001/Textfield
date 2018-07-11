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
import _ from "lodash";
import BotonControl from './BotonControl.js';

class ListadoDispositivos extends Component {
  constructor(props)
  {
    super(props);
    this.state={
    Dispositivo:[{name:"Compu", status:false, power:"ON" }, {name:"Compu 2", status:true, power:"ON" }, {name:"Compu3", status:true, power:"ON" }, {name:"Compu4", status:false, power:"ON" }], //lista Dispositivo
  }
}


ListDevice(){
  const renderList = this.state.Dispositivo.map((Device) =>{ //props
    return        <div className="CuadroDispositivo2 pt-card .pt-elevation-4 .pt-interactive">
            <div className="imagedispositivo">
              <BotonControl></BotonControl>
            </div>
            <div className="infodisp">
              <div className="Nombredisp" >
                {Device.name}
              </div>
              <div className="statedisp">
                Estado:
                <div className="circlestate">
                  <Icon icon="full-circle" iconSize={10} className={( Device.status ? "GreenColor":"RedColor")}/>
                </div>
              </div>
            </div>
          </div>;
    console.log(Device);

  })
  return renderList;
}

CambioButton(){
  let botonAct = ["botonapp"]
    if(Device.power === "ON") {
      botonAct.push('botonActive');
    }
}


  render() {
    return (
      <div className="ListadoDispositivos">
        <BarraMenu></BarraMenu>
        {_.isEmpty(this.state.Dispositivo) ?<p>No tienes Dispositivos</p> : this.ListDevice()}
      </div>
    );
  }
}
export default ListadoDispositivos;

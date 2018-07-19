import React, { Component } from 'react';
import './../../css/App.css'
import BarraMenu from './BarraMenu.js';
import { Icon } from "@blueprintjs/core";
import _ from "lodash";
import BotonControl from './BotonControl.js';


class ListadoDispositivos extends Component {

  constructor(props)
  {
    super(props);
    this.state={
    Dispositivo:[{name:"Computer 1", status:false, power:true }, {name:"Computer 2", status:true, power:false}, {name:"Computer 3", status:true, power:true}, {name:"Computer 4", status:false, power:true }, {name:"Computer 1", status:false, power:true }, {name:"Computer 2", status:true, power:false}, {name:"Computer 3", status:true, power:true}, {name:"Computer 4", status:false, power:true }],
  }

}
/*
CambioButton(){
  const Device = this.state.Dispositivo;
  let botonAct = ["botonapp"]
    if(Device.power) {
      botonAct.push('botonActive');
    }
}
*/
componentWillMount(power) {
     //console.log("componentWillMount listaaaaaaaaaaaaaaa", power)

  }

ListDevice(){
  const renderList = this.state.Dispositivo.map((Device) =>{ //props
    //const Dpower =this.state.Device.power
    return   <div className="CuadroDispositivo2 pt-card pt-interactive pt-elevation-2 ">

            <div className="imagedispositivo">
              <BotonControl estado={Device.power}></BotonControl>

            </div>
            <div className="infodisp">
              <div className="Nombredisp" >
                {Device.name}
              </div>
              <div className="statedisp">
                Estado:
                <div className="circlestate">
                  <Icon icon="full-circle" iconSize={10} className={( Device.status ? "GreenColor" : "RedColor")}/>
                </div>
              </div>
            </div>
          </div>;

  })
  return renderList;
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

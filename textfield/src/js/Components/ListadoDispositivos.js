import React, { Component } from 'react';
import './../../css/App.css'
import BarraMenu from './BarraMenu.js';
import { Icon } from "@blueprintjs/core";
import _ from "lodash";
import BotonControl from './BotonControl.js';
import InactiveButton from './InactiveButton.js';


class ListadoDispositivos extends Component {

  constructor(props)
  {
    super(props);
    this.state={
    Dispositivo:[],
    IsLoaded: false,
  }

}

componentDidMount(){
  fetch("http://localhost:3001/api/device/123456789")
  .then(res => res.json())
  .then(json => {
    this.setState({
      IsLoaded:true,
      Dispositivo:json,
    })
  });
}

ListDevice(){
  const renderList = this.state.Dispositivo.map((Device) =>{ //props
    //const Dpower =this.state.Device.power
    return   <div className="CuadroDispositivo2 pt-card pt-interactive pt-elevation-2 ">

            <div className="imagedispositivo">

              {(Device.device.online)?(
                <BotonControl estado={Device.device.online}></BotonControl>
              ):(
                <InactiveButton></InactiveButton>
              )

              }

            </div>
            <div className="infodisp">
              <div className="Nombredisp" >
                {Device.device.name}
              </div>
              <div className="statedisp">
                Estado:
                <div className="circlestate">
                  <Icon icon="full-circle" iconSize={10} className={( Device.device.active ? "GreenColor" : "RedColor")}/>
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

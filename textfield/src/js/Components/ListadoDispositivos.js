import React, { Component } from 'react';
import './../../css/App.css'
import BarraMenu from './BarraMenu.js';
import { Icon } from "@blueprintjs/core";
import _ from "lodash";
import BotonControl from './BotonControl.js';
import DevicesUser from './DevicesUser.js';
import InactiveButton from './InactiveButton.js';


class ListadoDispositivos extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      UserData:[],
  };

}

componentDidMount(){
  fetch("http://localhost:3002/api/user/admin@domergy.cl")
  .then(res => res.json())
  .then(json => {
    console.log(typeof json);
    console.log('result', json);
    this.setState({
      UserData:json,
    })
    console.log(this.state.UserData.user.devices)
  });
}


/*componentDidMount(){
  var url =" http://localhost:3001/api/device/"+this.state.Aux;
  console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(json => {
    this.setState({
      IsLoaded:true,
      Dispositivo:json,
    })
  });
}

ListDevice(){

  const renderList = this.state.Dispositivo.map((Device) =>{
    return   <div className="CuadroDispositivo2 pt-card pt-interactive pt-elevation-2 ">

            <div className="imagedispositivo">

              {(Device.device.device.online)?(
                <BotonControl estado={Device.device.device.online}></BotonControl>
              ):(
                <InactiveButton></InactiveButton>
              )

              }

            </div>
            <div className="infodisp">
              <div className="Nombredisp" >
                {Device.device.device.name}
              </div>
              <div className="statedisp">
                Estado:
                <div className="circlestate">
                  <Icon icon="full-circle" iconSize={10} className={( Device.device.device.active ? "GreenColor" : "RedColor")}/>
                </div>
              </div>
            </div>
          </div>;

  })
  return renderList;
}

*/

  render() {
    return (

      <div className="ListadoDispositivos">
        <BarraMenu></BarraMenu>
        {/*_.isEmpty(this.state.Dispositivo) ?<p>No tienes Dispositivos</p> : <p>No tienes Dispositivos</p> */}
        <DevicesUser></DevicesUser>
      </div>
    );
  }
}
export default ListadoDispositivos;

import React, { Component } from 'react';
import './../../css/App.css'
import { Redirect } from "react-router-dom";
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
      NumDevice:'',
      Dispositivos:[],
      logged:false,

  };

}

componentWillMount() {
  if (document.cookie) {
  this.setState({
    logged:true })
}
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
    //console.log(this.state.UserData.user.devices)
    //console.log(this.state.UserData.user.devices.length)
    this.setState({
      NumDevice:this.state.UserData.user.devices.length,
      Dispositivos:this.state.UserData.user.devices,
    })
    //console.log(this.state.NumDevice)
    //console.log(this.state.Dispositivos)
  });
}

/*ListDevice(){
if(this.state.NumDevice>0){
  for (let i = 0; i < this.state.NumDevice; i++){
    <div>{this.state.UserData.user.devices[i]}</div>
    console.log(this.state.UserData.user.devices[i])
  }
}
else{
  console.log("No tienes dispositivos")
}

}
*/

/*ListDevice(){
  {this.state.Dispositivos.map(Device => {
            return (
              <DevicesUser>
                {console.log(Device)}
                {console.log(Device)}
              </DevicesUser>
            );
          })}
}
*/

ListDevice(){
  const renderList = this.state.Dispositivos.map((Device) =>{
    return   <div>
          <DevicesUser id={Device}></DevicesUser>
          {console.log(Device)}
          </div>;

  })
  return renderList;
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
    const {logged}=this.state
    return (
      <div>
        {(logged) ? (
      <div className="ListadoDispositivos">
        <BarraMenu></BarraMenu>
        {console.log(this.state.Dispositivos)}
        {this.ListDevice()}
        {/*_.isEmpty(this.state.Dispositivo) ?<p>No tienes Dispositivos</p> : <p>No tienes Dispositivos</p> */}
        {/*<DevicesUser idDisp={this.state.NumDevice}></DevicesUser>*/}
      </div>
    ) : (
      <Redirect to="/login" />
  )}
</div>
    );
  }
}
export default ListadoDispositivos;

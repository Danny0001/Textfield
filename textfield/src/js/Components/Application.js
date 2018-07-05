import React, { Component } from 'react';
import axios from 'axios';
import Boton from './Boton.js';
import { Redirect } from "react-router-dom";
import './../../css/App.css'
import BarraLateral from './BarraLateral.js';
import BarraMenu from './BarraMenu.js';
import CuadroCrearDisp from './CuadroCrearDisp.js';
import InfoMediciones from './InfoMediciones.js';
import ListadoDispositivos from './ListadoDispositivos.js';
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
class Application extends Component {

constructor(props)
{
  super(props);
  this.state = {
    redirect:false,
    logged:false,
  };
  this.function_logout = this.function_logout.bind(this);
}
componentDidMount() {
if (document.cookie) {
  this.setState({ logged:true })
}
}
function_logout(){
  axios({
      method: "POST",
      url: "http://localhost:8001/api/user/logout",
    })
  .then(async response => {
    this.setState({
      logged:false,redirect:true
    });
    console.log("sesion cerrada correctamente")
  })
  .catch((err) => {
      console.log("error al cerrar sesion")
    })
}

  render() {
    const { redirect} = this.state
    return (
      <div className='application'>
        {(redirect) ? (
          <Redirect to="/login" />
        ) : (
          <div className="application">
            <BarraLateral></BarraLateral>
            <div className="barraSuperior">
              <button id="button" onClick={this.function_logout}>Cerrar sesión</button>
            </div>
            {/*<InfoMediciones></InfoMediciones>*/}
            <ListadoDispositivos></ListadoDispositivos>
            <CuadroCrearDisp></CuadroCrearDisp>
          </div>
      )}
      </div>
    );
  }
}

export default Application;

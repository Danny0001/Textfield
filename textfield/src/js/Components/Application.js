import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import './../../css/App.css'
import CuadroCrearDisp from './CuadroCrearDisp.js';
import ListadoDispositivos from './ListadoDispositivos.js';
import LeftNavBar from './LeftNavBar.js';
import NavBar from './NavBar.js'

class Application extends Component {

constructor(props)
{
  super(props);
  this.state = {
    redirect:false,
    logged:false,
    aux:true,
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
    const { redirect, aux} = this.state
    return (
      <div className='application'>
        {(aux) ? (
          <div className="application">
            <NavBar></NavBar>
            <LeftNavBar></LeftNavBar>
              {/*<LeftNavBar></LeftNavBar>
          <div className="barraSuperior">
              <button id="button" onClick={this.function_logout}>Cerrar sesión</button>
            </div>*/}
            {/*<InfoMediciones></InfoMediciones>*/}

            <ListadoDispositivos></ListadoDispositivos>
            {/*<Perfil></Perfil>*/}
            <CuadroCrearDisp></CuadroCrearDisp>
          </div>
        ) : (
          <Redirect to="/login" />
      )}
      </div>
    );
  }
}

export default Application;

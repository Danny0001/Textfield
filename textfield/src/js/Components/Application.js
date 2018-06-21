import React, { Component } from 'react';
import axios from 'axios';
import Boton from './Boton.js';
import { Redirect } from "react-router-dom";
import './../../css/App.css'
import BotonControl from './BotonControl.js';

import BarraLateral from './BarraLateral.js';
import BarraSuperior from './BarraSuperior.js';
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
            <div>
<<<<<<< HEAD
=======
              <BarraSuperior></BarraSuperior>
              <barraLateral></barraLateral>
>>>>>>> abe4f66fe18dfc65c41ddcc7e823d98a1a9454ee
              <button id="button" onClick={this.function_logout}>cerrar sesion</button>
              <BotonControl></BotonControl>
            </div>
          </div>

      )}
      </div>
    );
  }
}

export default Application;

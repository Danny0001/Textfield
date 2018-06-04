import React, { Component } from 'react';
import axios from 'axios';
import Boton from './Boton.js';
import './../../css/App.css'
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
function_logout(){
  axios({
      method: "POST",
      url: "http://localhost:8001/api/user/logout",
    })
  .then(async response => {
    this.setState({
      logged:true,redirect:true
    });
    console.log("sesion cerrada correctamente")
  })
  .catch((err) => {
      console.log("error al cerrar sesion")
    })
}

  render() {
    return (
      <div>
        <button id="button" onClick={this.function_logout}>cerrar sesion</button>
        <img src="http://acidmonkey.net/img/pag_en_construccion.jpg"></img>
      </div>
    );
  }
}

export default Application;

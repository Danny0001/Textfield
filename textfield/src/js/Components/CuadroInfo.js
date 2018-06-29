import React, { Component } from 'react';
import axios from 'axios';
import Boton from './Boton.js';
import { Redirect } from "react-router-dom";
import './../../css/App.css'
import BotonControl from './BotonControl.js';


class CuadroInfo extends Component {
  render() {
    return (
      <div className="CuadroInfo">
        <div className="BloqueSup"></div>
        <div className="BloqueInf"></div>
        <div className="BloqueInf2"></div>
      </div>
    );
  }
}

export default CuadroInfo;

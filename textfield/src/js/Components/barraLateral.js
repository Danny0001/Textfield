import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import './../../css/App.css'
import BotonControl from './BotonControl.js';
class barraLateral extends Component {
  render() {
    return (
      <div>
          <div className="barraIzquierda"></div>
      </div>
    );
  }
}

export default barraLateral;

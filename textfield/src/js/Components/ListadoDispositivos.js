import React, { Component } from 'react';
import CuadroDispositivo from './CuadroDispositivo.js';
import './../../css/App.css'
class ListadoDispositivos extends Component {

  render() {
    return (
      <div className="ListadoDispositivos">
        <CuadroDispositivo></CuadroDispositivo>
        <CuadroDispositivo></CuadroDispositivo>
      </div>
    );
  }
}
export default ListadoDispositivos;

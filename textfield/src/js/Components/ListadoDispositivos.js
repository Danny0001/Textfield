import React, { Component } from 'react';
import CuadroDispositivo from './CuadroDispositivo.js';
import './../../css/App.css'
import BarraMenu from './BarraMenu.js';
import CuadroCrearDisp from './CuadroCrearDisp.js';
class ListadoDispositivos extends Component {

  render() {
    return (
      <div className="ListadoDispositivos">
        <BarraMenu></BarraMenu>
        <CuadroDispositivo></CuadroDispositivo>
        <CuadroDispositivo></CuadroDispositivo>
        
      </div>
    );
  }
}
export default ListadoDispositivos;

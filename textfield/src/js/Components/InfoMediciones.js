import React, { Component } from 'react';
import CuadroInfo from './CuadroInfo.js';
import BotonControl from './BotonControl.js';
import './../../css/App.css'
class InfoMediciones extends Component {

  render() {
    return (
      <div className="InfoMediciones">
        <CuadroInfo></CuadroInfo>
        <BotonControl></BotonControl>
      </div>
    );
  }
}
export default InfoMediciones;

import React, { Component } from 'react';
import BotonControl from './BotonControl.js';
import './../../css/App.css'
class CuadroDispositivo extends Component {

  render() {
    return (
      <div className="CuadroDispositivo">
        <div className="imagedispoitivo">
          <BotonControl></BotonControl>
        </div>
        <div className="infodisp"></div>
      </div>
    );
  }
}
export default CuadroDispositivo;

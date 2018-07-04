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
        <div className="infodisp">
          <div className="Nombredisp">
            Nombre del dispositivo
          </div>
          <div>
            Estado:
          </div>
        </div>
      </div>
    );
  }
}
export default CuadroDispositivo;

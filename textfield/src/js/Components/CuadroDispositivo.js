import React, { Component } from 'react';
import BotonControl from './BotonControl.js';
import './../../css/App.css'
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
class CuadroDispositivo extends Component {

  render() {
    return (
      <div className="CuadroDispositivo">
        <div className="imagedispositivo">
          <BotonControl></BotonControl>
        </div>
        <div className="infodisp">
          <div className="Nombredisp">
            Nombre del dispositivo
          </div>
          <div className="statedisp">
            Estado:
            <div className="circlestate">
              <Icon icon="full-circle" iconSize={10}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CuadroDispositivo;

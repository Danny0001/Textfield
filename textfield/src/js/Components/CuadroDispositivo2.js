import React, { Component } from 'react';
import BotonControl from './BotonControl.js';
import './../../css/App.css'
import { Icon } from "@blueprintjs/core";

class CuadroDispositivo2 extends Component {

/*  constructor(props)
  {
    super(props);
    this.state={
  //  name:"",
  }
}*/

  render() {
    return (
      <div className="CuadroDispositivo2 pt-card .pt-elevation-4 .pt-interactive">
        <div className="imagedispositivo">
          <BotonControl></BotonControl>
        </div>
        <div className="infodisp">
          <div className="Nombredisp" >
            Nombre
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
export default CuadroDispositivo2;

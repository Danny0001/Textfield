import React, { Component } from 'react';
import axios from 'axios';
import './../../css/App.css'


class InactiveButton extends Component {



  render() {

    let botonAct = ["botonapp"];
    return (
      <div>
          <div id="buttonCont">
            <button className={botonAct.join(" ")}>OFF</button>
          </div>
      </div>
    );
  }
}

export default InactiveButton;

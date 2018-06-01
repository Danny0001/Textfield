import React, { Component } from 'react';
import axios from 'axios';
import Boton from './Boton.js';

class Application extends Component {

  render() {
    return (
      <div>
        <Boton Names={['Logout']}/>
        <img src="http://acidmonkey.net/img/pag_en_construccion.jpg"></img>
      </div>
    );
  }
}

export default Application;

import React, { Component } from 'react';
import './../../css/App.css'
class BarraLateral extends Component {

  render() {
    return (
      <div className="barraIzquierda">
        <img className="logo2" src='http://dragene.no/wp-content/uploads/2016/06/default1.jpg'/>
        <hr/>
        <ul className="mainbar">
          <li><a className="element">Perfil</a></li>
          <li><a className="element">Contexto</a></li>
          <li><a className="element">Dispositivo</a></li>
          <li><a className="element">Ayuda</a></li>
        </ul>
        <hr/>
      </div>
    );
  }
}

export default BarraLateral;

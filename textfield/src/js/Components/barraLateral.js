import React, { Component } from 'react';
import './../../css/App.css'
class BarraLateral extends Component {

  render() {
    return (
      <div className="barraIzquierda">
        <img className="logo2" src='http://dragene.no/wp-content/uploads/2016/06/default1.jpg'/>
        <hr/>
        <ul className="mainbar">
          <li><a className="element">Sección 1</a></li>
          <li><a className="element">Sección 2</a></li>
          <li><a className="element">Sección 3</a></li>
          <li><a className="element">Sección 4</a></li>
        </ul>
        <hr/>
      </div>
    );
  }
}

export default BarraLateral;

import React, { Component } from 'react';
import CampoDeTexto from './js/Components/CampoDeTexto.js';
import LineaInferior from './js/Components/LineaInferior.js';
import TextoExplicativo from './js/Components/TextoExplicativo.js';
import Boton from './js/Components/Boton.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form class="navbar-form" id="login">
            <CampoDeTexto Names={['email']} PlaceHolders={['Ingresa tu correo']} Types={['email']}/>
            <CampoDeTexto Names={['password']} PlaceHolders={['Ingresa tu contraseña']} Types={['password']}/>
            <Boton Names={['Ingresar']}/>
          </form>
      </div>
    );
  }
}

export default App;

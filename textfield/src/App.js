import React, { Component } from 'react';
import CampoDeTexto from './js/Components/CampoDeTexto.js';
import LineaInferior from './js/Components/LineaInferior.js';
import TextoExplicativo from './js/Components/TextoExplicativo.js';
import prub from './js/Components/prub.js';
import Boton from './js/Components/Boton.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form class="navbar-form" id="login">
            <img className="logo" src='http://dragene.no/wp-content/uploads/2016/06/default1.jpg'/>
            <TextoExplicativo Texto={['Correo']}/>
<<<<<<< HEAD
            <CampoDeTexto Names={['email']} PlaceHolders={['Ingresa tu correo']} Types={['email']} Patterns={["[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"]} Titles={['Correo inválido']}/>
            <TextoExplicativo Texto={['Contraseña']}/>
            <CampoDeTexto Names={['password']} PlaceHolders={['Ingresa tu contraseña']} Types={['password']} Patterns={["(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"]}/>
=======
            <CampoDeTexto id="email" Names={['email']} PlaceHolders={['Ingresa tu correo']} Types={['email']}  />
            <TextoExplicativo Texto={['Contraseña']}/>
            <CampoDeTexto Names={['password']} PlaceHolders={['Ingresa tu contraseña']} Types={['password']} />
>>>>>>> a9aa209a774a94549f84ebfe4751ce8f5f2dcd27
            <div className="link"><a href='http://www.google.com' className='ForgotPass'>Olvidaste tu contraseña?</a></div>
            <Boton Names={['Ingresar']}/>
          </form>
      </div>
    );
  }
}

export default App;

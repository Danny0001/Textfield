import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../../css/App.css'
import Logo from './../../images/Logo.png'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <section id="inicio">
        <header>
          <div className="navbar">
            <img className="logopag" src={Logo}></img>
            <ul className="lista">
              <li className="elementos"><a className="refs" href="#inicio">Inicio</a></li>
              <li className="elementos"><a className="refs" href="#acerca">Acerca de DYE</a></li>
              <li className="elementos"><a className="refs" href="#beneficios">Beneficios</a></li>
              <li className="elementos"><a className="refs" href="#contacto">Información de contacto</a></li>
            </ul>
          </div>
        </header>
        </section>
        <div className="divaux"></div>
        <div className="centrar">
          <h1 className="titulo">Para Construir una Industria<br/>Eficiente e Inteligente</h1>
        </div>
        <div className="linked">
                  <Link to="/login" className="enlace">Comienza ya!</Link>
        </div>
        <div className="divaux"></div>
        <div className="seccion2">
          <section id="acerca">
            <h1>Acerca de DYE</h1>
            <p>Domain Your Energy (DYE) es una plataforma de gestión eléctrica inteligente, donde usuarios, en sus hogares, empresas o entidades públicas pueden gestionar su energía mediante indicadores de consumo, generación, estado de micro red, ahorro en dinero, gráficos, reportes y alertas. A partir de servicios y aplicaciones que integran tecnologías del Internet de las Cosas, se construye una red de sensores inteligentes que medirán y controlarán en tiempo real, el consumo y producción eléctrica, sumando a la suscripción de servicios web que dotan de conocimiento al usuario, entregando una experiencia completa e intuitiva.</p>
        </section>
        </div>
        <div className="seccion3">
          <section id="beneficios"></section>
        </div>
        <div className="seccion4">
          <section id="contacto"></section>
        </div>
      </div>
    );
  }
}

export default Home;

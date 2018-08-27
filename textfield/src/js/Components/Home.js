import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../../css/App.css'
import Logo from './../../css/imagenes/LOGO.png'
import 'font-awesome/css/font-awesome.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <section id="inicio">
        <header>
          <div className="navbar">
            <img className="logopag" alt="logo" src={Logo}></img>
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
          <section id="beneficios">
            <h1>Beneficios</h1>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div className="beneficio">
              <div className="bloque">
                <div className="icon">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </div>
                <div className="text">
                  <h3 className="textobloque">CONTRIBUYE CON EL MEDIO AMBIENTE Y REDUCE TU HUELLA DE CARBONO</h3>
                </div>
              </div>
              <div className="bloque">
                <div className="icon">
                  <i className="fa fa-battery-three-quarters" aria-hidden="true"></i>
                </div>
                <div className="text">
                  <h3 className="textobloque">AHORRA ENTRE UN 10% Y 20% DE CONSUMO ENERGÉTICO</h3>
                </div>
              </div>
              <div className="bloque">
                <div className="icon">
                  <i className="fa fa-industry" aria-hidden="true"></i>
                </div>
                <div classtextobloqueName="text">
                  <h3 className="textobloque">VERIFICA TU PLAN ENERGÉTICO Y CERTIFICATE EN EFICIENCIA ENERGÉTICA (ISO 50.001 )</h3>
                </div>
              </div>
            </div>
            <div className="beneficio">
              <div className="bloque">
                <div className="icon">
                  <i className="fa fa-sticky-note" aria-hidden="true"></i>
                </div>
                <div className="text">
                  <h3 className="textobloque">ADMINISTRA TUS MEDIOS DE GENERACIÓN ELÉCTRICA</h3>
                </div>
              </div>
              <div className="bloque">
                <div className="icon">
                  <i className="fa fa-sun-o" aria-hidden="true"></i>
                </div>
                <div className="text">
                  <h3 className="textobloque">INTEGRA VARIABLES ENERGÉTICAS A TU PROCESO DE PRODUCCIÓN</h3>
                </div>
              </div>
              <div className="bloque">
                <div className="icon">
                  <i className="fa fa-mobile" aria-hidden="true"></i>
                </div>
                <div className="text">
                  <h3 className="textobloque">GESTIONA TU PLAN DE CONSUMO ENERGÉTICO</h3>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="seccion4">
          <section id="contacto">
            <h1>Contacto</h1>
            <div>
              <h3>¿Tienes dudas, consultas o sugerencias? No dudes en enviarnos un mail</h3>
              <div className="contact">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <p>domainyourenergy@gmail.com</p>
              </div>
            </div>
            <div>
              <h3>Puedes encontrarnos en</h3>
              <div className="contact">
                <i className="fa fa-home" aria-hidden="true"></i>
                <p>Virginio Arias 1371, Ñuñoa, Región Metropolitana</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    );
  }
}

export default Home;

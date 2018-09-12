import React, { Component } from 'react';
import './../../css/App.css'
import NavBar from './NavBar.js'
import LeftNavBar from './LeftNavBar.js'
import Overlay from './Overlay.js'

import Dash2 from './../../css/imagenes/Dash2.png'
import Dash3 from './../../css/imagenes/Dash3.png'
import Dash4 from './../../css/imagenes/Dash4.png'
import Dash5 from './../../css/imagenes/Dash5.png'
import Dev1 from './../../css/imagenes/Dev1.png'
import Tel1 from './../../css/imagenes/Tel1.png'

import { Redirect } from "react-router-dom";
import { Button, Card, Elevation, Checkbox,Icon } from "@blueprintjs/core";
import {
    Boundary,
    Breadcrumb,
    Classes,
    H5,
    IMenuItemProps,
    Label,
    Menu,
    MenuItem,
    OverflowList,
    Popover,
    Position,
    RadioGroup,
    Slider,
    FormGroup,
    InputGroup,
    FileInput,
} from "@blueprintjs/core";
import { Example, handleStringChange, IExampleProps } from "@blueprintjs/docs-theme";

class Help extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      logged:false,
    };
  }

  componentWillMount() {
    if (document.cookie) {
    this.setState({
      logged:true })
  }
}

  render() {
    const {logged}=this.state
    return (
      <div className="homeP">
        {(logged) ? (
        <div>
          <NavBar></NavBar>
          <LeftNavBar></LeftNavBar>
          <div className="content">
            <div className='HelpBar'>
              <ul className="lista">
                <li className="HelpLi"><a  class="HelpA" href="#dashboard">Dashboard</a></li>
                <li className="HelpLi"><a  class="HelpA" href="#devices">Devices</a></li>
                <li className="HelpLi"><a  class="HelpA" href="#telemetry">Telemetry</a></li>
              </ul>
            </div>
            <div className="HelpContainer">
              <section id="inicio">
              {/*<div>
                <Card className="CardHelp" interactive={true} elevation={Elevation.TWO}>
                  <h2>Inicio</h2>
                  <div className="DivHelp">
                  <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                  <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                  <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                  <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                  <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                  <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                  <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                  <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                  <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                  <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                  <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                  <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                </div>
                </Card>
              </div>*/}
            </section>
              <section id="dashboard">
              <div>

                <Card className="CardHelp" interactive={true} elevation={Elevation.TWO}>
                  <h2>DashBoard</h2>
                  <div className="DivHelp">
                  <h4>Cash & Total</h4>
                  <img  src={Dash2}></img>
                  <h4>Energy</h4>
                  <img  src={Dash3}></img>
                  <h4>Voltage</h4>
                  <img  src={Dash4}></img>
                  <h4>Current</h4>
                  <img  src={Dash5}></img>

                </div>
                </Card>
              </div>
            </section>
              <section id="devices">
              <div>
                <Card className="CardHelp" interactive={true} elevation={Elevation.TWO}>
                  <h2 >Devices</h2>
                  <div className="DivHelp">
                    <h4>Agregar Dispositivo</h4>
                    <img  src={Dev1}></img>
                </div>
                </Card>
              </div>
            </section>
              <section id="telemetry">
              <div>
                <Card className="CardHelp" interactive={true} elevation={Elevation.TWO}>
                  <h2 >Telemetry</h2>
                  <div className="DivHelp">
                    <h4>Tabla de Datos</h4>
                    <img  src={Tel1}></img>
                </div>
                </Card>
              </div>
            </section>
            <section id="profile">
            {/*<div>
              <Card className="CardHelp" interactive={true} elevation={Elevation.TWO}>
                <h2 >Profile</h2>
                <div className="DivHelp">
                <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
                <p>dfbdfbdfbdbdfbdfbdfbdfb</p>
              </div>
              </Card>
            </div>*/}
          </section>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
    )}
  </div>
    );
  }
}

export default Help;

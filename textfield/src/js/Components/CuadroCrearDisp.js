import React, { Component } from 'react';
import createRef from 'create-react-ref';
import PropTypes from 'prop-types';
import './../../css/App.css'
import { Icon, Intent } from "@blueprintjs/core";
import { Button, Card, Elevation } from "@blueprintjs/core";
import { Classes, H5, Label, Slider, Switch } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

class CuadroCrearDisp extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
    IdentificadorDisp:" ",
  }
  this.handleChange = this.handleChange.bind(this);
  this.crearDispositivo = this.crearDispositivo.bind(this);
}


handleChange(event) {
  this.setState({IdentificadorDisp: event.target.value});
}

openTools() {
var btn = document.getElementById('btnTools');
console.log("hola");
var className = btn.className;
var res = '';

if (className == "pt-button pt-intent-success buttonadd") {
    className = "pt-button pt-intent-success buttonadd open";
    document.getElementById('migration-form').className = "CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer show active";
}

else {
    className = "pt-button pt-intent-success buttonadd";
    document.getElementById('migration-form').className = "CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer";
}

btn.className = className;
}

crearDispositivo(e){
    e.preventDefault()
    const { IdentificadorDisp } = this.state
    //get the fruit object name from the form
    //if we have a value
    //call the addFruit method of the App component
    //to change the state of the fruit list by adding an new item
    if(typeof IdentificadorDisp === 'string' && IdentificadorDisp.length > 0) {
    //  this.props.addDispositivo(IdentificadorDisp);

    console.log(IdentificadorDisp);
    }
  }

  render() {
    return (
      <form id="migration-form" className="CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer" onSubmit={this.crearDispositivo}>
        <label onClick={this.openTools} className="close">x</label>
        <label class="titulodisp">Agregar Dispositivo</label>
        <label class="pt-label labeldisp">
           Identificador de Dispositivo
          <input class= "pt-input inputdisp" type="text" value={this.state.IdentificadorDisp} onChange={this.handleChange} placeholder="Ingresar Identificador de Dispositivo" dir="auto"/>
        </label>
        {/*
        <label class="pt-control pt-switch .pt-large">
          <input type="checkbox"  />
          <span class="pt-control-indicator"></span>
          Estado
        </label>*/}
        <button type="submit" class="pt-button buttonagreg" >Agregar</button>
    </form>
    );
  }
}

export default CuadroCrearDisp;

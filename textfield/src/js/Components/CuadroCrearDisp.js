import React, { Component } from 'react';
import './../../css/App.css'
import { Icon, Intent } from "@blueprintjs/core";
import { Button, Card, Elevation } from "@blueprintjs/core";
import { Classes, H5, Label, Slider, Switch } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

class CuadroCrearDisp extends Component {
  /*
  constructor(props)
  {
    super(props);
    this.state = {
      nombre:'',
      estado:" ",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
      event.preventDefault()

      const { email, password } = this.state
  }
*/

  render() {
    return (
      <div className="CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive" >
        <label class="pt-label">
           Dispositivo
          <input class="labeldisp pt-input" type="text" placeholder="Nombre" dir="auto" />
        </label>
        <label class="pt-control pt-switch .pt-large">
          <input type="checkbox"  />
          <span class="pt-control-indicator"></span>
          Estado
        </label>
        <button type="button" class="pt-button" >Crear Nuevo Dispositivo</button>
    </div>
    );
  }
}

export default CuadroCrearDisp;

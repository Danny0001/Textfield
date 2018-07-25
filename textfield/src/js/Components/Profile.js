import React, { Component } from 'react';
import './../../css/App.css'
import NavBar from './NavBar.js'
import LeftNavBar from './LeftNavBar.js'
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

class Profile extends Component {
cambio(){
  console.log("dfvsdgvsdvsdf");
}
  render() {
    return (
      <div className="homeP">
        <NavBar></NavBar>
        <LeftNavBar></LeftNavBar>
        <div className="content">
          <h1>User Profile</h1>
            <Card interactive={true} elevation={Elevation.TWO} className="cardProfile">
              <div className="imgProfileBox">
                <img className="imgProfile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"></img>
                <FileInput disabled={true} text="Choose Image..." onInputChange={this.cambio()} />
              </div>
              <div className="infoProfile">
                <FormGroup
                  label="Nombre"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup id="text-input" placeholder="Ingresar Nombre" />
                </FormGroup>
                <FormGroup
                  label="Apellidos"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup id="text-input" placeholder="Ingresar Apellidos" />
                </FormGroup>
                <FormGroup
                  label="Fecha de nacimiento"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup id="text-input" placeholder="Placeholder text" />
                </FormGroup>
                <FormGroup
                  label="E-mail"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup id="text-input" placeholder="Placeholder text" />
                </FormGroup>
                <FormGroup
                  label="Telefono"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup id="text-input" placeholder="Placeholder text" />
                </FormGroup>
                <FormGroup
                  label="Direccion"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup id="text-input" placeholder="Placeholder text" />
                </FormGroup>
            </div>
            </Card>
        </div>
      </div>
    );
  }
}

export default Profile;

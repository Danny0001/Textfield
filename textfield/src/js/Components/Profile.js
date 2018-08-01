import React, { Component } from 'react';
import './../../css/App.css'
import NavBar from './NavBar.js'
import LeftNavBar from './LeftNavBar.js'
import { Button, Card, Elevation, Checkbox,Icon } from "@blueprintjs/core";
import { Alignment, ButtonGroup, IconName, Switch } from "@blueprintjs/core";
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
          <div className="cardProfile1">
            <div><h1>User Profile</h1></div>
              <div class="bp3-button-group .modifier">
                <a class="bp3-button bp3-icon-database" tabindex="0" role="button">Queries</a>
                <a class="bp3-button bp3-icon-function" tabindex="0" role="button">Functions</a>
                <a class="bp3-button" tabindex="0" role="button">
                  Options <span class="bp3-icon-standard bp3-icon-caret-down bp3-align-right"></span>
                </a>
              </div>
          </div>
            <Card interactive={true} elevation={Elevation.TWO} className="cardProfile">
              <div className="imgProfileBox">
                <img className="imgProfile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"></img>
                <FileInput disabled={true} text="Choose Image..." onInputChange={this.cambio()} />
              </div>
              <div className="infoProfile ProfileTittles">
                <FormGroup
                  label="Nombre"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput" id="text-input" placeholder="Ingresar Nombre" />
                </FormGroup>
                <FormGroup
                  label="Apellidos"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput"  id="text-input" placeholder="Ingresar Apellidos" />
                </FormGroup>
                <FormGroup
                  label="Fecha de nacimiento"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput"  id="text-input" placeholder="Placeholder text" />
                </FormGroup>
                <FormGroup
                  label="E-mail"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput"  id="text-input" placeholder="Placeholder text" />
                </FormGroup>
                <FormGroup
                  label="Telefono"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput"  id="text-input" placeholder="Placeholder text" />
                </FormGroup>
                <FormGroup
                  label="Direccion"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput"  id="text-input" placeholder="Placeholder text" />
                </FormGroup>
                <Button type="button" class="bp3-button bp3-icon-add " >Change</Button>
            </div>
            <div>
            </div>
            </Card>
        </div>
      </div>
    );
  }
}

export default Profile;

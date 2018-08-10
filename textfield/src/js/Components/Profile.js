import React, { Component } from 'react';
import './../../css/App.css'
import NavBar from './NavBar.js'
import LeftNavBar from './LeftNavBar.js'
import { Button, Card, Elevation, Checkbox,Icon } from "@blueprintjs/core";
import { Alignment, ButtonGroup, IconName, Switch, AnchorButton } from "@blueprintjs/core";
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
            <ButtonGroup minimal={true} >
                <Button class="bp3-button bp3-icon-add " type="button"  icon="edit">Edit</Button>
                <Button class="bp3-button bp3-icon-add " type="button"  icon="key">Change Password</Button>
                {/* <Button class="bp3-button bp3-icon-add " type="button" intent="danger" icon="trash">Delete</Button>*/}
              {/*  <AnchorButton rightIcon="caret-down">Options</AnchorButton>*/}
            </ButtonGroup>
          </div>
            <Card interactive={true} elevation={Elevation.TWO} className="cardProfile">
              <div className="imgProfileBox">
                <img className="imgProfile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"></img>
              </div>
              <div className="infoProfile ProfileTittles">
                <FormGroup
                  label="Name"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput" id="text-input" placeholder="Ingresar Nombre" />
                </FormGroup>
                <FormGroup
                  label="Lastname"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput"  id="text-input" placeholder="Ingresar Apellidos" />
                </FormGroup>
                <FormGroup
                  label="E-mail"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput"  id="text-input" placeholder="Placeholder text" />
                </FormGroup>
                <FormGroup
                  label="Organization"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput"  id="text-input" placeholder="Ingresar Apellidos" />
                </FormGroup>
                <Button type="button" class="bp3-button bp3-icon-add " intent="success" >Change</Button>
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

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

  constructor(props)
  {
    super(props);
    this.state={
      Name: 'NAME',
      Lastname: 'LASTNAME',
      Email:'EMAIL@EMAIL.cl',
      Organization: 'ORGANIZATION',
      edit:false,
    };

    this.editItem= this.editItem.bind(this);
}

editItem(edit){
  this.setState({edit: !this.state.edit});
  console.log(this.state.edit)
}
cambio(){
  console.log("dfvsdgvsdvsdf");
}
  render() {
    const {edit}=this.state
    return (
      <div className="homeP">
        <NavBar></NavBar>
        <LeftNavBar></LeftNavBar>
        {(edit) ? (
          <div className="content">
          <div className="cardProfile1">
            <div><h1>User Profile</h1></div>
            <ButtonGroup minimal={true} >
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
                  <InputGroup className="ProfileInput" id="text-input" placeholder="Ingresar Nombre" defaultValue={this.state.Name}/>
                </FormGroup>
                <FormGroup
                  label="Lastname"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput"  id="text-input" placeholder="Ingresar Apellidos" defaultValue={this.state.Lastname}/>
                </FormGroup>
                <FormGroup
                  label="E-mail"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput"  id="text-input" placeholder="Ingresar Email" defaultValue={this.state.Email}/>
                </FormGroup>
                <FormGroup
                  label="Organization"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput"  id="text-input" placeholder="Ingresar Organizacion" defaultValue={this.state.Organization}/>
                </FormGroup>
                <Button type="button" class="bp3-button bp3-icon-add " intent="success" onClick={this.editItem.bind(this)} >Change</Button>
            </div>
            <div>
            </div>
            </Card>
        </div>):
      (<div className="content">
      <div className="cardProfile1">
        <div><h1>User Profile</h1></div>
        <ButtonGroup minimal={true} >
            <Button class="bp3-button bp3-icon-add " type="button"  icon="edit" onClick={this.editItem.bind(this)}>Edit</Button>
            <Button class="bp3-button bp3-icon-add " type="button"  icon="key">Change Password</Button>
            {/* <Button class="bp3-button bp3-icon-add " type="button" intent="danger" icon="trash">Delete</Button>*/}
          {/*  <AnchorButton rightIcon="caret-down">Options</AnchorButton>*/}
        </ButtonGroup>
      </div>
        <Card interactive={true} elevation={Elevation.TWO} className="cardProfile">
          <div className="imgProfileBox">
            <img className="imgProfile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"></img>
          </div>
          <div className="infoProfile ProfileTittles profiledata">
            <div>Name: {this.state.Name}</div>
            <div>Lastname: {this.state.Lastname}</div>
            <div>Email: {this.state.Email}</div>
            <div>Organization {this.state.Organization}</div>
        </div>
        <div>
        </div>
        </Card>
    </div>)}
      </div>
    );
  }
}

export default Profile;

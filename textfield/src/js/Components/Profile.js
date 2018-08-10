import React, { Component } from 'react';
import './../../css/App.css'
import { Link } from "react-router-dom";
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
      USER:[{Name: 'NAME',
      Lastname: 'LASTNAME',
      Email:'EMAIL@EMAIL.cl',
      Organization: 'ORGANIZATION'}]
    }
}
cambio(){
  console.log("dfvsdgvsdvsdf");
}

ProfileUser(){
  const renderProf = this.state.USER.map((usuario) =>{
    return <div className="infoProfile ProfileTittles profiledata">
        <div>
          Name: {usuario.Name}
        </div>
        <div>
          Lastname: {usuario.Lastname}
        </div>
        <div>
          Email: {usuario.Email}
        </div>
        <div>
          Organization: {usuario.Organization}
        </div>
  </div>

})
return renderProf;
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
                <Link to="/EditProfile" className="LinkEdit">
                <Button class="bp3-button bp3-icon-add " type="button"  icon="edit">Edit</Button>
                </Link>
                <Button class="bp3-button bp3-icon-add " type="button"  icon="key">Change Password</Button>
                {/* <Button class="bp3-button bp3-icon-add " type="button" intent="danger" icon="trash">Delete</Button>*/}
              {/*  <AnchorButton rightIcon="caret-down">Options</AnchorButton>*/}
            </ButtonGroup>
          </div>
            <Card interactive={true} elevation={Elevation.TWO} className="cardProfile">
              <div className="imgProfileBox">
                <img className="imgProfile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"></img>
              </div>
              {this.ProfileUser()}
            <div>
            </div>
            </Card>
        </div>
      </div>
    );
  }
}

export default Profile;

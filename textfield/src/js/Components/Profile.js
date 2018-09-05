import React, { Component } from 'react';
import './../../css/App.css'
import axios from 'axios';
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
      firstname: '',
      lastname: '',
      email:'',
      edit:false,
      User:[],
      IsLoaded:false,
    };

    this.editItem= this.editItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

componentDidMount(){
  fetch("http://localhost:3002/api/user/admin@domergy.cl")
  .then(res => res.json())
  .then(json => {
    this.setState({
      IsLoaded:true,
      User:json,
    })
    console.log(this.state.User.user)
  });
}
GetUser(){
  this.setState({
    firstname: this.state.User.user.firstname,
    lastname: this.state.User.user.lastname,
    email: this.state.User.user.email
  })
}

GetUser2(){
  this.setState({
    User: {
      user:{
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email
      }
    }
  })
}

handleChange(event){
  this.setState({[event.target.name]: event.target.value});
}



editItem(edit){
  this.setState({edit: !this.state.edit});
  this.GetUser();
  axios.put("http://localhost:3002/api/user/05360643-ee4a-44fa-95e5-a4c3463bccd1/attribute",
  {firstname: this.state.firstname,})
  axios.put("http://localhost:3002/api/user/05360643-ee4a-44fa-95e5-a4c3463bccd1/attribute",
  {lastname: this.state.lastname,})
  this.GetUser2()
}

  render() {
    var {IsLoaded, User, edit}=this.state;
    if(!IsLoaded){
      return <div>Loading...</div>;
    }
    else
    {
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
                  label="Firstname"
                  labelFor="text-input"
                  labelInfo="(required)">

                  <InputGroup className="ProfileInput" name='firstname' id="text-input" onChange={ this.handleChange } placeholder="Ingresar Nombre" Value={this.state.firstname}/>
                  {console.log(this.state.firstname)}
                </FormGroup>
                <FormGroup
                  label="Lastname"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput" name='lastname' id="text-input" onChange={ this.handleChange } placeholder="Ingresar Apellidos" Value={this.state.lastname}/>
                </FormGroup>
                <FormGroup
                  label="E-mail"
                  labelFor="text-input"
                  labelInfo="(required)">
                  <InputGroup className="ProfileInput" name='email' id="text-input"  placeholder="Ingresar Email" disabled Value={this.state.email}/>
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
              <div>Firstname: {User.user.firstname}</div>
              <div>Lastname: {User.user.lastname}</div>
              <div>Email: {User.user.email}</div>
        </div>
        <div>
        </div>
        </Card>
    </div>)}
      </div>
    );
  }
  }
}

export default Profile;

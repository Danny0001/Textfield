import React, { Component } from 'react';
import './../../css/App.css'
import axios from 'axios';
import NavBar from './NavBar.js'
import LeftNavBar from './LeftNavBar.js'
import BotonControl from './BotonControl.js';
import InactiveButton from './InactiveButton.js';
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

class DevicesUser extends Component {

  constructor(props)
  {
    super(props);
    this.state={
    Dispositivo:[],
    IsLoaded: false,
    Aux:'123456789',
    online:'',
    name:'',
    active:'',
    stateDevice: null,
  }
}



componentDidMount(){
  var url =" http://localhost:3001/api/device/"+this.state.Aux;
  fetch(url)
  .then(res => res.json())
  .then(json => {
    console.log(typeof json);
    console.log('result', json);
    let state = json.device.attributes.power === 'ON' ? true : false
    this.setState({
      Dispositivo:json,
      IsLoaded:true,
      stateDevice: state
    })
    console.log(this.state.Dispositivo.device.attributes.power)
    this.Getdips()
  });
}
Getdips(){
  this.setState({
    online: this.state.Dispositivo.device.online,
    name: this.state.Dispositivo.device.name,
    active: this.state.Dispositivo.device.active
  })
}

  render() {
    console.log(this.state.stateDevice)
      return (
        <div className="CuadroDispositivo2 pt-card pt-interactive pt-elevation-2 ">
          <div className="imagedispositivo">

            {(this.state.online)?(
              <BotonControl estado={this.state.stateDevice}></BotonControl>
            ):(
              <InactiveButton></InactiveButton>
            )

            }

          </div>
          <div className="infodisp">
            <div className="Nombredisp" >
              {this.state.name}
            </div>
            <div className="statedisp">
              Estado:
              <div className="circlestate">
                <Icon icon="full-circle" iconSize={10} className={( this.state.active ? "GreenColor" : "RedColor")}/>
              </div>
            </div>
          </div>
        </div>
    );

  }
}

export default DevicesUser;

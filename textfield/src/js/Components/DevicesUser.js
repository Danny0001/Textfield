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
    stateDevice: '',
    deviceID:this.props.id,
    Aux2:'dani',
  }
}

componentDidMount(){
  console.log(this.props.id)
  /*this.setState({
    deviceID:this.props.id
  })*/
  console.log("id dips",this.state.deviceID)
  var url =" http://localhost:3001/api/device/"+this.state.deviceID;
  fetch(url)
  .then(res => res.json())
  .then(json => {
    console.log(typeof json);
    console.log('result', json);
    let state;
    (json.device.online)?(state = json.device.attributes.power === 'on' ? true : false):(state:false)
    console.log("jajajjaja",json.device.online)
    //let state = json.device.attributes.power === 'on' ? true : false
    this.setState({
      Dispositivo:json,
      IsLoaded:true,
      stateDevice: state
    })


    //console.log(this.state.state)
    //console.log(this.state.Dispositivo.device.attributes.power)
    console.log("khkjh",this.state.online)
    this.Getdips()
    console.log(this.state.online)

    /*{(this.state.online==true)?(
      this.Identification()
    ):(
      this.setState({
        stateDevice: false
      })
    )}
    */
    console.log("kzchkszhk",this.state.stateDevice)
  });
}

Estadodisp(){
  {(this.state.online==true)?(
    this.Identification()
  ):(
    this.setState({
      stateDevice: false,
    })
  )}
  console.log("stateDevice false", this.state.stateDevice)
}

Identification(){
  let state = this.state.Dispositivo.device.attributes.power === 'on' ? true : false
  this.setState({
    stateDevice: state
  })
  console.log("stateDevice true", this.state.stateDevice)
}

Getdips(){
  this.setState({
    online: this.state.Dispositivo.device.online,
    name: this.state.Dispositivo.device.name,
    active: this.state.Dispositivo.device.active
  })
}

  render() {
    console.log(":O", this.state.deviceID)
    console.log("dani no dice", this.state.stateDevice)
      return (
        <div className="CuadroDispositivo2 pt-card pt-interactive pt-elevation-2 " id={this.state.deviceID}>
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

              State:
              <div className="circlestate">
                <Icon icon="full-circle" iconSize={10} className={( this.state.online ? "GreenColor" : "RedColor")}/>
              </div>

          </div>
          </div>
        </div>
    );

  }
}

export default DevicesUser;

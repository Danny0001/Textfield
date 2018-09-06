import React, { Component } from 'react';
import './../../css/App.css'
import NavBar from './NavBar.js'
import LeftNavBar from './LeftNavBar.js'
import Overlay from './Overlay.js'
import { Redirect } from "react-router-dom";
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

class Help extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      logged:false,
    };
  }

  componentDidMount() {
  if (document.cookie) {
    this.setState({ logged:true })
  }
}
  render() {
    const {logged}=this.state
    return (
      <div className="homeP">
        {(logged) ? (
        <div>
          <NavBar></NavBar>
          <LeftNavBar></LeftNavBar>
          <div className="content">
            <h1>Help</h1>
            <Overlay></Overlay>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
    )}
  </div>
    );
  }
}

export default Help;

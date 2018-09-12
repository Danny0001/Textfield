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

class Overlay extends Component {

  render() {
    return (
      <div className='HelpBar'>
        <Button className="ButtonHelp" icon="dashboard" intent="success" text="DashBoard" />
        <Button className="ButtonHelp" icon="mobile-phone" intent="success" text="Devices" />
        <Button className="ButtonHelp" icon="timeline-line-chart" intent="success" text="Telemetry" />
        <Button className="ButtonHelp" icon="user" intent="success" text="Profile" />
      </div>
    );
  }
}

export default Overlay;

import React, { Component } from 'react';
import './../../css/App.css'
import { Redirect } from "react-router-dom";
import NavBar from './NavBar.js'
import LeftNavBar from './LeftNavBar.js'
import Table from './Table.js';
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

class Analisys extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      logged:false,
      User:[],
    };
  }
  //{console.log(curl -G 'http://localhost:8086/query?pretty=true' --data-urlencode "db=pird" --data-urlencode "q=SELECT\"value\"FROM\"voltage\"WHERE\"device\"='123456789' AND time>=now()-5m")}

//curl -G 'http://localhost:8086/query?pretty=true' --data-urlencode "db=domergy" --data-urlencode "q=SELECT \"value\" FROM \"voltage\" WHERE \"device\"='123456789'"

  componentDidMount(){
    fetch("http://localhost:3002/api/user/admin@domergy.cl")
    .then(res => res.json())
    .then(json => {
      this.setState({
        IsLoaded:true,
        User:json,
      })
    });
  }
  componentWillMount() {
    if (document.cookie) {
    this.setState({
      logged:true })
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
          <h2>Telemetry</h2>
          <Table></Table>
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
  )}
</div>
    );
  }
}

export default Analisys;

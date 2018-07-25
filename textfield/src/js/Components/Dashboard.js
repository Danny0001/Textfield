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

class Dashboard extends Component {
cambio(){
  console.log("dfvsdgvsdvsdf");
}
  render() {
    return (
      <div className="homeP">
        <NavBar></NavBar>
        <LeftNavBar></LeftNavBar>
        <div >
          <div className="container">
            <div className="DashboardContainer row">
            <div className="DashboardCard col-xs-12 col-sm-6 col-lg-3">
            <Card interactive={true} elevation={Elevation.TWO} className="CardSelf">
              <div className="CardDashboardTittle">
              <h5>
                Dispositivo X
              </h5>
            </div>
              <div className="CardDashboardInfo">
                <div className="CardElementInfo">
                  <span className="SpanTitleDashboard">ID:  </span>
                  <span>123456789</span>
                </div>
                <div className="CardElementInfo">
                  <span className="SpanTitleDashboard">Name:  </span>
                  <span>X</span>
                </div>
                <div className="CardElementInfo">
                  <span className="SpanTitleDashboard">Type:  </span>
                  <span>Sonoff 1 entrada</span>
                </div>
                <div className="CardElementInfo">
                  <span className="SpanTitleDashboard">Type:  </span>
                  <span>Medidor de consumo energetico</span>
                </div>
              </div>
            </Card>
            </div>
            <div className="DashboardCard">
            <Card interactive={true} elevation={Elevation.TWO} className="CardSelf ">
              <div className="CardDashboardTittle">
              <h5>
                Energy
              </h5>
            </div>
              <div className="CardDashboardInfo">
                <div className="CardElementInfo">
                  <span className="SpanTitleDashboard">ID:  </span>
                  <span>Nombre</span>
                </div>
              </div>
            </Card>
            </div>

          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

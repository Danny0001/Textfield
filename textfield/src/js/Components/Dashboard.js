import React, { Component } from 'react';
import './../../css/App.css'
import NavBar from './NavBar.js'
import LeftNavBar from './LeftNavBar.js'
import Chart from './Chart.js'
import Chart2 from './Chart2.js'
import Chart3 from './Chart3.js'
import Chart4 from './Chart4.js'
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
import {Bar, Line, Pie, Bubble} from 'react-chartjs-2';


class Dashboard extends Component {

  constructor()
  {
    super();
    this.state={
      Aux:'123456789',
      chartData:{},
      Dispositivo:[],
      IsLoaded:false,
    }
  }

  componentDidMount(){
    var url =" http://localhost:3001/api/device/"+this.state.Aux;
    fetch(url)
    .then(res => res.json())
    .then(json => {
      console.log(typeof json);
      console.log('result', json);
      this.setState({
        Dispositivo:json,
        IsLoaded:true,
      })
    console.log(this.state.Dispositivo.device.attributes.power)
    });
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
  // Ajax Call Here
    this.setState({
      chartData:{
        labels: ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'Sept.'],
        datasets: [
          {
            label: 'Months',
            data: [
              1234,
              1516,
              2254,
              5631,
              6021,
              2153,
              3264,
              123,
              5456,
            ],
            backgroundColor:[
              'rgba(39, 132, 246, 0.48)',
              'rgba(39, 246, 49, 0.48)',
              'rgba(246, 49, 39, 0.48)',
              'rgba(39, 235, 246, 0.48)',
              'rgba(246, 39, 235, 0.48)',
              'rgba(43, 141, 216, 0.48)',
              'rgba(176, 216, 43, 0.48)',
              'rgba(216, 43, 46, 0.48)',
              'rgba(216, 43, 147, 0.48)',
              'rgba(104, 43, 216, 0.48)',
            ]
      }
    ]
    }
    })
  }

cambio(){
  console.log("dfvsdgvsdvsdf");
}
  render() {
    return (
      <div className="homeP Dashback">
        <NavBar></NavBar>
        <LeftNavBar></LeftNavBar>
        <div >
          <div className="container">
            <div className="DashboardContainer ">
              <div className="DashboardCard">
                <Card interactive={true} elevation={Elevation.TWO} className="smallCard">
                  <div className="CardDashboardTittle">
                  <h5>
                    Today KW/H
                  </h5>
                </div>
                <div>
                  56.4
                </div>
                </Card>
              </div>
              <div className="DashboardCard">
                <Card interactive={true} elevation={Elevation.TWO} className="smallCard">
                  <div className="CardDashboardTittle">
                  <h5>
                    Today $
                  </h5>
                </div>
                <div>
                  $850
                </div>
                </Card>
              </div>
              <div className="DashboardCard">
                <Card interactive={true} elevation={Elevation.TWO} className="smallCard">
                  <div className="CardDashboardTittle">
                  <h5>
                    KW/H Cost
                  </h5>
                </div>
                <div>
                  $105
                </div>
                </Card>
              </div>
              <div className="DashboardCard">
                <Card interactive={true} elevation={Elevation.TWO} className="smallCard">
                  <div className="CardDashboardTittle">
                  <h5>
                    N° Devices
                  </h5>
                </div>
                <div>
                  1
                </div>
                </Card>
              </div>
              <div className="DashboardCard">
                <Card interactive={true} elevation={Elevation.TWO} className="smallCard">
                  <div className="CardDashboardTittle">
                  <h5>
                    N° Active Device
                  </h5>
                </div>
                <div>
                  1
                </div>
                </Card>
                {console.log(document.cookie)}
              </div>
              {/*
            <div className="DashboardCard">
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
            */}
            <div className="DashboardCard">
            <Card interactive={true} elevation={Elevation.TWO} className="CardNum CardSelf ">
              <div className="CardDashboardTittle">
              <h5>
                Cash
              </h5>
            </div>
              <div className="CardDashboardInfo">

                <div className="CardElementInfo">
                  <Icon className="IconDollarKw" icon="dollar" iconSize={50} />
                  <span className="CashKW"> 30.000</span>
                </div>
              </div>
              <div className="CardDashboardTittle">
              <h5>
                KW/H
              </h5>
            </div>
              <div className="CardDashboardInfo">
                <div className="CardElementInfo">
                  <Icon className="IconDollarKw" icon="offline" iconSize={50} />
                  <span className="CashKW"> 75.34 Kw/h</span>
                </div>
              </div>
            </Card>
          </div>
            <div className="DashboardCard">
            <Card interactive={true} elevation={Elevation.TWO} className=" CardSelf ">
              <div className="CardDashboardInfo">
                <Chart chartData={this.state.chartData} LegendPosition="top"  Month=": May"/>
              </div>
            </Card>
            </div>
            <div className="DashboardCard">
            <Card interactive={true} elevation={Elevation.TWO} className=" CardSelf ">
              <div className="CardDashboardInfo">
                <Chart2/>
              </div>
            </Card>
            </div>
            <div className="DashboardCard">
            <Card interactive={true} elevation={Elevation.TWO} className=" CardSelf ">
              <div className="CardDashboardInfo">
                <Chart3/>
              </div>
            </Card>
            </div>
            <div className="DashboardCard">
            <Card interactive={true} elevation={Elevation.TWO} className=" CardSelf ">
              <div className="CardDashboardInfo">
                <Chart4/>
              </div>
            </Card>
            </div>
            <div className="DashboardCard">
            <Card interactive={true} elevation={Elevation.TWO} className=" CardSelf ">
              <div className="CardDashboardInfo">
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

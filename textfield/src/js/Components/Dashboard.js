import React, { Component } from 'react';
import './../../css/App.css'
import NavBar from './NavBar.js'
import LeftNavBar from './LeftNavBar.js'
import { Redirect } from "react-router-dom";
import ChartVolt from './ChartVolt.js'
import ChartAmp from './ChartAmp.js'
import Chart from './Chart.js'
import Chart2 from './Chart2.js'
import Chart3 from './Chart3.js'
import Chart4 from './Chart4.js'
import axios from 'axios';


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
      logged:false,
      chartData:{},
      User:[],
      IsLoaded:false,
      NumDevice:'',
      Ampere:'',
      Watt:'',
      Volt:'',
      TodayKW:'',
      TotalKW:'',

    }
  }


  async componentDidMount(){

    await this.getVolt()
    await this.getAmp()
    await this.getWatt()
    await this.getToday()
    await this.getTotalKW()
  }

  GetNum(){
    this.setState({
      NumDevice:this.state.User.user.devices.length,
    })
  }

getVolt = async () => {
  try{
    const id = "123456789"
    const host = "http://localhost:8086"
    const db = "domergy"
    const response = await axios.get(`${host}/query?db=${db}&q=SELECT "value" FROM voltage WHERE ("device" = '${id}') AND time >= now() - 5m&epoch=ms`)
    const lengthAmp =((response.data.results[0].series[0].values.length)-1)
    this.setState({
      Volt:response.data.results[0].series[0].values[lengthAmp][1],
    })
  }catch(e){
    console.log(e)
  }
}

getAmp = async () => {
  try{
    const id = "123456789"
    const host = "http://localhost:8086"
    const db = "domergy"
    const response = await axios.get(`${host}/query?db=${db}&q=SELECT "value" FROM current WHERE ("device" = '${id}') AND time >= now() - 5m&epoch=ms`)
    const lengthAmp =((response.data.results[0].series[0].values.length)-1)
    this.setState({
      Ampere:response.data.results[0].series[0].values[lengthAmp][1],
    })
  }catch(e){
    console.log(e)
  }
}
getWatt = async () => {
  try{
    const id = "123456789"
    const host = "http://localhost:8086"
    const db = "domergy"
    const response = await axios.get(`${host}/query?db=${db}&q=SELECT "value" FROM active_power WHERE ("device" = '${id}') AND time >= now() - 5m&epoch=ms`)
    const lengthAmp =((response.data.results[0].series[0].values.length)-1)
    console.log("wattDash",response.data.results[0].series[0].values[lengthAmp][1])
    console.log(response)
  }catch(e){
    console.log(e)
  }
}

getToday = async () => {
  try{
    const id = "123456789"
    const host = "http://localhost:8086"
    const db = "domergy"
    const response = await axios.get(`${host}/query?db=${db}&q=SELECT "value" FROM energy_day WHERE ("device" = '${id}') AND time >= now() - 5m&epoch=ms`)
    const lengthAmp =((response.data.results[0].series[0].values.length)-1)

    this.setState({
      TodayKW:response.data.results[0].series[0].values[lengthAmp][1],
    })
  }catch(e){
    console.log(e)
  }
}

getTotalKW = async () => {
  try{
    const id = "123456789"
    const host = "http://localhost:8086"
    const db = "domergy"
    const response = await axios.get(`${host}/query?db=${db}&q=SELECT "value" FROM energy_total WHERE ("device" = '${id}') AND time >= now() - 5m&epoch=ms`)
    const lengthAmp =((response.data.results[0].series[0].values.length)-1)
    this.setState({
      TotalKW:response.data.results[0].series[0].values[lengthAmp][1],
    })
  }catch(e){
    console.log(e)
  }
}

  componentWillMount(){
    this.getChartData();
    if (document.cookie) {
    this.setState({
      logged:true })
  }
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
    const {logged}=this.state
    return (
      <div className="homeP">
        {(logged) ? (
      <div className=" Dashback">
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
                  {this.state.TodayKW}
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
                  {((this.state.TodayKW)*105).toFixed(3)}
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
                    Voltage
                  </h5>
                </div>
                <div>
                  {this.state.Volt}
                </div>
                </Card>
              </div>
              <div className="DashboardCard">
                <Card interactive={true} elevation={Elevation.TWO} className="smallCard">
                  <div className="CardDashboardTittle">
                  <h5>
                    Ampere
                  </h5>
                </div>
                <div>
                  {this.state.Ampere}
                </div>
                </Card>
            {/*console.log(curl -G 'http://localhost:3000/query?pretty=true' --data-urlencode "db=pird" --data-urlencode "q=SELECT\"value\"FROM\"voltage\"WHERE\"device\"='123456789' AND time>=now()-5m")*/}
              </div>

            <div className="DashboardCard">
            <Card interactive={true} elevation={Elevation.TWO} className="CardNum CardSelf ">
              <div className="CardDashboardTittle">
              <h5>
                Total Cash
              </h5>
            </div>
              <div className="CardDashboardInfo">

                <div className="CardElementInfo">
                  <Icon className="IconDollarKw" icon="dollar" iconSize={50} />
                  <span className="CashKW"> {((this.state.TotalKW)*105.3).toFixed(3)}</span>
                </div>
              </div>
              <div className="CardDashboardTittle">
              <h5>
                Total KW/H
              </h5>
            </div>
              <div className="CardDashboardInfo">
                <div className="CardElementInfo">
                  <Icon className="IconDollarKw" icon="offline" iconSize={50} />
                  <span className="CashKW"> {this.state.TotalKW}</span>
                </div>
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
                <ChartVolt/>
              </div>
            </Card>
            </div>
            <div className="DashboardCard">
            <Card interactive={true} elevation={Elevation.TWO} className=" CardSelf ">
              <div className="CardDashboardInfo">
                <ChartAmp/>
              </div>
            </Card>
            </div>
          </div>
          </div>
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
  )}
</div>
    );
  }
}

export default Dashboard;

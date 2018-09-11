import React, { Component } from 'react';
import './../../css/App.css'
import { Redirect } from "react-router-dom";
import NavBar from './NavBar.js'
import LeftNavBar from './LeftNavBar.js'
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

class Table extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      logged:false,
      Time:[],
      Watt:[],
      Volt:[],
      Amp:[],
      Cash:[],
    };
  }
  //{console.log(curl -G 'http://localhost:8086/query?pretty=true' --data-urlencode "db=pird" --data-urlencode "q=SELECT\"value\"FROM\"voltage\"WHERE\"device\"='123456789' AND time>=now()-5m")}

//curl -G 'http://localhost:8086/query?pretty=true' --data-urlencode "db=domergy" --data-urlencode "q=SELECT \"value\" FROM \"voltage\" WHERE \"device\"='123456789'"

async componentDidMount(){
  await this.getWatt()
}

CalculatorHours(minutos){
  const momentoActual = new Date()
  console.log("Horaaa", momentoActual.getHours())
  var Hours = momentoActual.getHours()
  var Minutes = momentoActual.getMinutes()
  console.log("Minutes", Minutes)
  var time= (Hours*60)+Minutes-minutos
  var horaf=parseInt(time/60)
  var minutosf=parseInt(((time/60)-horaf)*60)

  if(minutosf<10){
    return horaf+":0"+minutosf
  }
  else{
    return horaf+":"+minutosf
  }

}

getWatt = async () => {
  this.CalculatorHours(10)
  console.log(this.CalculatorHours(10))
  const hrchart = new Date()
  var hrc= hrchart.getHours()
  var minc=hrchart.getMinutes()

  if(minc<10){
    var hrminc= hrc+":0"+minc
  }
  else{
    var hrminc= hrc+":"+minc
  }

  try{
    const id = "123456789"
    const host = "http://localhost:8086"
    const db = "domergy"
    const responseW = await axios.get(`${host}/query?db=${db}&q=SELECT "value" FROM active_power WHERE ("device" = '${id}') AND time >= now() - 5m&epoch=ms`)
    const lengthW =((responseW.data.results[0].series[0].values.length)-1)
    const responseV = await axios.get(`${host}/query?db=${db}&q=SELECT "value" FROM voltage WHERE ("device" = '${id}') AND time >= now() - 5m&epoch=ms`)
    const lengthV =((responseV.data.results[0].series[0].values.length)-1)
    const responseA = await axios.get(`${host}/query?db=${db}&q=SELECT "value" FROM current WHERE ("device" = '${id}') AND time >= now() - 5m&epoch=ms`)
    const lengthAmp =((responseA.data.results[0].series[0].values.length)-1)
    const responseT = await axios.get(`${host}/query?db=${db}&q=SELECT "value" FROM energy_day WHERE ("device" = '${id}') AND time >= now() - 5m&epoch=ms`)
    const lengthT =((responseT.data.results[0].series[0].values.length)-1)


    const dividid =lengthAmp/6
    const dividido = parseInt(dividid)
    this.setState({
        Time: [
          this.CalculatorHours(50),
          this.CalculatorHours(40),
          this.CalculatorHours(30),
          this.CalculatorHours(20),
          this.CalculatorHours(10),
          hrminc],
        Watt:[
          responseW.data.results[0].series[0].values[lengthW-dividido*5][1],
          responseW.data.results[0].series[0].values[lengthW-dividido*4][1],
          responseW.data.results[0].series[0].values[lengthW-dividido*3][1],
          responseW.data.results[0].series[0].values[lengthW-dividido*2][1],
          responseW.data.results[0].series[0].values[lengthW-dividido][1],
          responseW.data.results[0].series[0].values[lengthW][1],
        ],
        Volt:[
          responseV.data.results[0].series[0].values[lengthV-dividido*5][1],
          responseV.data.results[0].series[0].values[lengthV-dividido*4][1],
          responseV.data.results[0].series[0].values[lengthV-dividido*3][1],
          responseV.data.results[0].series[0].values[lengthV-dividido*2][1],
          responseV.data.results[0].series[0].values[lengthV-dividido][1],
          responseV.data.results[0].series[0].values[lengthV][1],
        ],
        Amp:[
          responseA.data.results[0].series[0].values[lengthAmp-dividido*5][1],
          responseA.data.results[0].series[0].values[lengthAmp-dividido*4][1],
          responseA.data.results[0].series[0].values[lengthAmp-dividido*3][1],
          responseA.data.results[0].series[0].values[lengthAmp-dividido*2][1],
          responseA.data.results[0].series[0].values[lengthAmp-dividido][1],
          responseA.data.results[0].series[0].values[lengthAmp][1],
        ],
        Cash:[
          ((responseT.data.results[0].series[0].values[lengthT-dividido*5][1])*105).toFixed(3),
          ((responseT.data.results[0].series[0].values[lengthT-dividido*4][1])*105).toFixed(3),
          ((responseT.data.results[0].series[0].values[lengthT-dividido*3][1])*105).toFixed(3),
          ((responseT.data.results[0].series[0].values[lengthT-dividido*2][1])*105).toFixed(3),
          ((responseT.data.results[0].series[0].values[lengthT-dividido][1])*105).toFixed(3),
          ((responseT.data.results[0].series[0].values[lengthT][1])*105).toFixed(3),
        ]
    })
  }catch(e){
    console.log(e)
  }
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
      <div >
        <section className="SectionTable">
  <div class="tbl-header TableAlgo">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>Time</th>
          <th>Energy(W)</th>
          <th>Voltage(V)</th>
          <th>Current(A)</th>
          <th>$</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content TableAlgo">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td>{this.state.Time[5]}</td>
          <td>{this.state.Watt[5]}</td>
          <td>{this.state.Volt[5]}</td>
          <td>{this.state.Amp[5]}</td>
          <td>{this.state.Cash[5]}</td>
        </tr>
        <tr>
          <td>{this.state.Time[4]}</td>
          <td>{this.state.Watt[4]}</td>
          <td>{this.state.Volt[4]}</td>
          <td>{this.state.Amp[4]}</td>
          <td>{this.state.Cash[4]}</td>
        </tr>
        <tr>
          <td>{this.state.Time[3]}</td>
          <td>{this.state.Watt[3]}</td>
          <td>{this.state.Volt[3]}</td>
          <td>{this.state.Amp[3]}</td>
          <td>{this.state.Cash[3]}</td>
        </tr>
        <tr>
          <td>{this.state.Time[2]}</td>
          <td>{this.state.Watt[2]}</td>
          <td>{this.state.Volt[2]}</td>
          <td>{this.state.Amp[2]}</td>
          <td>{this.state.Cash[2]}</td>
        </tr>
        <tr>
          <td>{this.state.Time[1]}</td>
          <td>{this.state.Watt[1]}</td>
          <td>{this.state.Volt[1]}</td>
          <td>{this.state.Amp[1]}</td>
          <td>{this.state.Cash[1]}</td>
        </tr>
        <tr>
          <td>{this.state.Time[0]}</td>
          <td>{this.state.Watt[0]}</td>
          <td>{this.state.Volt[0]}</td>
          <td>{this.state.Amp[0]}</td>
          <td>{this.state.Cash[0]}</td>
        </tr>

      </tbody>
    </table>
  </div>
</section>
      </div>
    );
  }
}

export default Table;

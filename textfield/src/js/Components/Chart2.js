import React, { Component } from 'react';
import {Bubble} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

class Chart2 extends Component {

  constructor(){
    super();
    this.state={
      chartData2:{
          labels: ['February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label:['Kw/h'],
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data:
              [
                "",
                "",
                "",
                "",
                "",
                "",
              ]
            }
          ]
        }
      }
  }

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
      const response = await axios.get(`${host}/query?db=${db}&q=SELECT "value" FROM active_power WHERE ("device" = '${id}') AND time >= now() - 5m&epoch=ms`)
      const lengthAmp =((response.data.results[0].series[0].values.length)-1)
      const dividid =lengthAmp/6
      const dividido = parseInt(dividid)
      console.log("dividid", dividid)
      console.log("dividido", dividido)
      this.setState({
        chartData2:{
          labels: [
            this.CalculatorHours(50),
            this.CalculatorHours(40),
            this.CalculatorHours(30),
            this.CalculatorHours(20),
            this.CalculatorHours(10),
            hrminc],
          datasets:[
            {
              label:["Watt/10min"],
              backgroundColor: "rgba(218, 21, 21, 0.75)",
              data:[
                response.data.results[0].series[0].values[lengthAmp-dividido*5][1],
                response.data.results[0].series[0].values[lengthAmp-dividido*4][1],
                response.data.results[0].series[0].values[lengthAmp-dividido*3][1],
                response.data.results[0].series[0].values[lengthAmp-dividido*2][1],
                response.data.results[0].series[0].values[lengthAmp-dividido][1],
                response.data.results[0].series[0].values[lengthAmp][1],
              ]
            }
          ]
        }
      })
    }catch(e){
      console.log(e)
    }
  }

    render() {
      return (
        <div>
          <h2>Energy(Watt)</h2>
          <Line data={this.state.chartData2} />
          {console.log("wattchart2", this.state.chartData2.datasets[0].data[6])}
        </div>
      );
    }
  }
export default Chart2;

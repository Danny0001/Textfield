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
                0,
                0,
                0,
                0,
                0,
                40]
            }
          ]
        }
      }
  }

  componentDidMount(){
    this.getWatt()
  }

  getWatt = async () => {
    try{
      const id = "123456789"
      const host = "http://localhost:8086"
      const db = "domergy"
      const response = await axios.get(`${host}/query?db=${db}&q=SELECT "value" FROM active_power WHERE ("device" = '${id}') AND time >= now() - 5m&epoch=ms`)
      const lengthAmp =((response.data.results[0].series[0].values.length)-1)
      this.setState({
        chartData2:{
          datasets:[
            {
              label:["Watt/10min"],
              data:[
                response.data.results[0].series[0].values[lengthAmp-250][1],
                response.data.results[0].series[0].values[lengthAmp-200][1],
                response.data.results[0].series[0].values[lengthAmp-150][1],
                response.data.results[0].series[0].values[lengthAmp-100][1],
                response.data.results[0].series[0].values[lengthAmp-50][1],
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
          <h2>Telemetry</h2>
          <Line data={this.state.chartData2} />
          {console.log("wattchart2", this.state.chartData2.datasets[0].data[6])}
        </div>
      );
    }
  }
export default Chart2;

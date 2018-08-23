import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class Chart4 extends Component {

  constructor(){
    super();
    this.state={
      chartData4:{
        labels: [
        'Device 1',
        'Device 2',
        'Device 3',
        'Device 4',
        'Device 3',
        'Device 3',
        'Device 3',
        'Device 3',
        'Device 4',
        'Device 3',
        'Device 3',
        'Device 3',
        'Device 3'
      ],
      datasets: [{
        data: [300, 50, 100, 80],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FFCE95'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
        }
      }
  }


    render() {
      return (
        <div>
          <h2>Device consume</h2>
          <Doughnut data={this.state.chartData4} />
        </div>
      );
    }
  }
export default Chart4;

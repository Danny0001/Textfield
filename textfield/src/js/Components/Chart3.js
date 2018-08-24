import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';


class Chart3 extends Component {

  constructor(){
    super();
    this.state={
      chartData3:{
        labels: [
          'Device 1',
          'Device 2',
          'Device 3'
        ],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
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
          <h2>Expense of the day</h2>
          <Pie data={this.state.chartData3} />
        </div>
      );
    }
  }
export default Chart3;

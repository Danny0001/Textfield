import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';


class Chart3 extends Component {

  constructor(){
    super();
    this.state={
      chartData3:{
        labels: [
          'Red',
          'Green',
          'Yellow'
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
          <h2>Line Example</h2>
          <Pie data={this.state.chartData3} />
        </div>
      );
    }
  }
export default Chart3;

import React, { Component } from 'react';
import './../../css/App.css'
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {


  constructor(props)
  {
    super(props);
    this.state={
      chartData: props.chartData
    }
}
static defaultProps ={
  displayTitle: true,
  displayLegend: true,
  legendPosition: 'right'
}
  render(){
    return(
      <div className="chart">
        <Bar
        	data={this.state.chartData}
        	options={{
            title: {
              display: 'true',
              text: 'Most expensive month'+ this.props.Month,
              fontSize: 25
            },
            legend:{
              display: true,
              position: this.props.LegendPosition
            }
          }}
        />
      </div>
    )
  }
}
export default Chart;

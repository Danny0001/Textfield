import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import './../../css/App.css'
import ListadoDispositivos from './ListadoDispositivos.js';


class BotonControl extends Component {


  constructor(props)
  {
    super(props);
    this.state = {
      estado: false,
    };
    this.cambioState= this.cambioState.bind(this);
  }

  /*controlButton(){
    this.setState(prevState=>({
      estado:
      !prevState.estado
    }))
  }*/
/*
  componentWillMount(){
    this.setState({estado: !this.state.estado});
  }
*/

  componentDidMount(){
      this.setState({estado: this.props.estado});
      console.log("componentDidMount", this.state.estado );
  }

 cambioState(estado){
  //console.log(this.state.estado);
  //  this.setState({estado: !this.state.estado});
this.setState({estado: !this.state.estado});
//console.log(this.state.estado);
  //  console.log(this.state.estado);
    var est= this.state.estado;

    axios.put('http://10.108.0.45:3001/api/device/PIRD-SMARTMETERLAB-1/command/POWER', {
      value: "toggle"},
      {header: {
        'Authorization': "Bearer",
        'Content-Type': 'application/json'
      }}
    ).then(response =>{
      console.log("Exito");
    })
    .catch((err)=>{
      console.log("Error", err);
    })
      //  console.log("OFF");

}


  render() {

    let botonAct = ["botonapp"];

    if(this.state.estado===true) {
      botonAct.push('botonActive');
    }
    console.log(this.state.estado);
    return (
      <div>
          <div id="buttonCont">
            <button estado={this.state.estado} className={botonAct.join(" ")} onClick={this.cambioState.bind(this)}>{this.state.estado ? 'ON' : 'OFF'}</button>
          </div>
      </div>
    );
  }
}

export default BotonControl;

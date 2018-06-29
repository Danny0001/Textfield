import React, { Component } from 'react';
import axios from 'axios';
import './../../css/App.css'
class BotonControl extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      estado:false
    };
    //this.controlButton= this.controlButton.bind(this);
  }
  /*controlButton(){
    this.setState(prevState=>({
      estado:
      !prevState.estado
    }))
  }*/

    cambioState(estado){
    this.setState({estado: !this.state.estado});

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
    if(this.state.estado) {
      botonAct.push('botonActive');
    }
    return (
      <div>
          <div id="buttonCont">
            <button className={botonAct.join(' ')} onClick={this.cambioState.bind(this)}>{this.state.estado ? 'ON' : 'OFF'}</button>
          </div>
      </div>
    );
  }
}

export default BotonControl;

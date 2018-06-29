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
      if(est){
        axios.put('device/PIRD-SMARTMETERLAB-1/command', {
          value: "OFF"
        }).then(response =>{
          console.log("Exito");
        })
        .catch((err)=>{
          console.log("Error");
        })
      //  console.log("OFF");
      }else{
        axios.put('device/PIRD-SMARTMETERLAB-1/command', {
          value: "ON"
      }).then(response =>{
        console.log("Exito");
      })
      .catch((err)=>{
        console.log("Error");
      })
    //  console.log("ON");
    }
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

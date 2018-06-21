import React, { Component } from 'react';
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

  toggle() {
      this.setState({estado: !this.state.estado});
    }


  render() {
    let botonAct = ["botonapp"];
    if(this.state.estado) {
      botonAct.push('botonActive');
    }
    return (
      <div>
<<<<<<< HEAD
          <div>
            <button className={botonAct.join(' ')} onClick={this.toggle.bind(this)}>{this.state.estado ? 'ON' : 'OFF'}</button>
=======
          <div id="buttonCont">
            <button className="botonapp {this.state.estado ? 'botonappActive': 'botonappInactive'}" onClick={this.controlButton}>{this.state.estado ? 'ON' : 'OFF'}</button>
>>>>>>> 59c1c5d93da85a54ab5e5a1b36b2e4fe2e0b6b6a
          </div>
      </div>
    );
  }
}

export default BotonControl;

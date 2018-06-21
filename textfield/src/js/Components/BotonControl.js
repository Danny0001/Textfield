import React, { Component } from 'react';
import './../../css/App.css'
class BotonControl extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      estado:false
    };
    this.controlButton= this.controlButton.bind(this);
  }
  controlButton(){
    this.setState(prevState=>({
      estado:
      !prevState.estado
    }))
  }



  render() {
    return (
      <div>
          <div>
            <button className="botonapp {this.state.estado ? 'botonappActive': 'botonappInactive'}" onClick={this.controlButton}>{this.state.estado ? 'ON' : 'OFF'}</button>
          </div>
      </div>
    );
  }
}

export default BotonControl;

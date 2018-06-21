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
            <button className="green" onClick={this.controlButton}>{this.state.estado ? 'ON' : 'OFF'}</button>
          </div>
      </div>
    );
  }
}

export default BotonControl;

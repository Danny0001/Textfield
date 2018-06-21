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
          <div>
            <button className={botonAct.join(' ')} onClick={this.toggle.bind(this)}>{this.state.estado ? 'ON' : 'OFF'}</button>
          </div>
      </div>
    );
  }
}

export default BotonControl;

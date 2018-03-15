import React, {Component} from 'react';
import './../../css/App.css'

class Boton extends Component
{
  render(){
    return(
      <div id="button">
      <button type="submit" className="Boton">
      {this.props.Names}
      </button>
      </div>

    );
  }
}

export default Boton;

import React, {Component} from 'react';

class Boton extends Component
{
  render(){
    return(
      <div>
      <button type="submit" className="Boton">
      {this.props.Names}
      </button>
      </div>

    );
  }
}

export default Boton;

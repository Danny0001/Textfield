import React, {Component} from 'react';

class CampoDeTexto extends Component
{
  render(){
    const { Types, Names, PlaceHolders } = this.props

    return(
      <div>
        <input type={Types} name={Names} class="form-control" placeholder={PlaceHolders}></input>
      </div>
    );
  }
}

export default CampoDeTexto;

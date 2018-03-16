import React, {Component} from 'react';
import './../../css/App.css'

class CampoDeTexto extends Component
{
  render(){
    const {  Types, Names, PlaceHolders, value, Patterns, onChange } = this.props

    return(
      <div className='CampoDeTexto'>
        <input
          onChange={ onChange }
          value={ value }
          type={Types} name={Names} class="form-control" placeholder={PlaceHolders} pattern={Patterns} required ></input>
      </div>
    );
  }
}

export default CampoDeTexto;

import React, {Component} from 'react';
import './../../css/App.css'

class CampoDeTexto extends Component
{
  render(){
    const {  Types, Names, PlaceHolders, value, onChange } = this.props

    return(
      <div className='CampoDeTexto'>
        <input
          type={Types}
          name={Names}
          placeholder={PlaceHolders}
          value={ value }
          onChange={ onChange }
          class="form-control"  ></input>
      </div>
    );
  }
}

export default CampoDeTexto;

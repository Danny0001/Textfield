import React, {Component} from 'react';
import './../../css/App.css'

class CampoDeTexto extends Component
{
  constructor(){
    super();
  }

  onFocus(){
    console.log("OnFocus");
  }

  onBlur(){
    console.log("OnBlur");
  }
  render(){
    const {  Types, Names, PlaceHolders, value, Patterns, onChange } = this.props

    return(
      <div className='CampoDeTexto'>
        <input id="IngresoDatos"
          onChange={ onChange }
          value={ value }
          type={Types} name={Names} class="form-control" placeholder={PlaceHolders} pattern={Patterns} required
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          ></input>
      </div>
    );
  }
}

export default CampoDeTexto;

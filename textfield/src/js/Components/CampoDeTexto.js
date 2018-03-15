import React, {Component} from 'react';
import './../../css/App.css'

class CampoDeTexto extends Component
{
  render(){
    const { Types, Names, PlaceHolders, Patterns } = this.props

    return(
      <div className='CampoDeTexto'>
        <input value type={Types} name={Names} class="form-control" placeholder={PlaceHolders} pattern={Patterns}></input>
      </div>
    );
  }
}

export default CampoDeTexto;

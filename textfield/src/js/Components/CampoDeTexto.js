import React, {Component} from 'react';
import './../../css/App.css'

class CampoDeTexto extends Component
{
  render(){
<<<<<<< HEAD
    const { Types, Names, PlaceHolders, required, Patterns } = this.props

    return(
      <div className='CampoDeTexto'>
        <input type={Types} name={Names} class="form-control" placeholder={PlaceHolders} required pattern={Patterns}></input>
      </div>
    );
  }
}

export default CampoDeTexto;

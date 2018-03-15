import React, {Component} from 'react';
import './../../css/App.css'

class CampoDeTexto extends Component
{
  render(){
    const { Types, Names, PlaceHolders, Patterns, Titles } = this.props

    return(
      <div className='CampoDeTexto'>
        <input type={Types} name={Names} class="form-control" placeholder={PlaceHolders} pattern={Patterns} title={Titles}></input>
      </div>
    );
  }
}

export default CampoDeTexto;

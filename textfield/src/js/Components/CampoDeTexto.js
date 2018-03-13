import React, {Component} from 'react';
import './../../css/App.css'

class CampoDeTexto extends Component
{
  render(){
    const { Types, Names, PlaceHolders } = this.props

    return(
      <div className='CampoDeTexto'>
        <input type={Types} name={Names} class="form-control" placeholder={PlaceHolders}></input>
      </div>
    );
  }
}

export default CampoDeTexto;

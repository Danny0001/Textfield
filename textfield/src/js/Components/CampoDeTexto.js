import React, {Component} from 'react';
import './../../css/App.css'

class CampoDeTexto extends Component
{
  render(){
    const { Types, Names, PlaceHolders, required, Pattern } = this.props

    return(
      <div className='CampoDeTexto'>
        <input type={Types} name={Names} class="form-control" placeholder={PlaceHolders} required pattern={Pattern}></input>
      </div>
    );
  }
}

export default CampoDeTexto;

import React, {Component} from 'react';
import './../../css/App.css'

class CampoDeTexto extends Component
{
  render(){
<<<<<<< HEAD
    const { Types, Names, PlaceHolders, Patterns, Titles } = this.props

    return(
      <div className='CampoDeTexto'>
        <input type={Types} name={Names} class="form-control" placeholder={PlaceHolders} pattern={Patterns} title={Titles}></input>
=======
    const { Types, Names, PlaceHolders, required, Pattern } = this.props

    return(
      <div className='CampoDeTexto'>
        <input type={Types} name={Names} class="form-control" placeholder={PlaceHolders} required pattern={Pattern}></input>
>>>>>>> a9aa209a774a94549f84ebfe4751ce8f5f2dcd27
      </div>
    );
  }
}

export default CampoDeTexto;

import React, {Component} from 'react';
import LineaInferior from './LineaInferior.js';
import './../../css/App.css'

class CampoDeTexto extends Component
{

  constructor(props){
    super(props);
    this.state ={isToogleOn:false,isToogleOff:false};

    this.handleClick = this.handleClick.bind(this);
  }

handleClick(){
  this.setState(prevState=>({
    isToogleOn:
    !prevState.isToogleOn,
    isToogleOff:
    !prevState.isToogleOff
  }))
}

  /*onFocus(){
    console.log("OnFocus");
  }

  onBlur(){
    console.log("OnBlur");
  }
*/
  render(){
    const {  Types, Names, PlaceHolders, value, Patterns, onChange } = this.props

    return(
      <div className='CampoDeTexto'>
        <input id="IngresoDatos"
          onChange={ onChange }
          value={ value }
          type={Types} name={Names} class="form-control" placeholder={PlaceHolders} pattern={Patterns} required
          onFocus={() => {this.setState({ isToogleOn: true, isToogleOff:false})}}
          onBlur={() => {this.setState({ isToogleOn:false, isToogleOff:true })}}
          ></input>
          <div id="Linea_base"></div>
          {this.state.isToogleOn ?
            (
              <div id="LineaInferior_onFocus"/>
            ):(
              <div id="Linea_oculta"/>
            )
          }
          {this.state.isToogleOff ?
            (
              <div id="LineaInferior_onBlur"/>
            ):(
              <div id="Linea_oculta"/>
            )
          }
      </div>
    );
  }
}

export default CampoDeTexto;

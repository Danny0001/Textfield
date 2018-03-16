import React, {Component} from 'react';
import './../../css/App.css'

class CampoDeTexto extends Component
{

  constructor(props)
  {
    super(props);
    this.state = { valuekey: "value",  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    const {  Types, Names, PlaceHolders, Patterns } = this.props

    return(
      <div className='CampoDeTexto'>
        <input type={Types} name={Names} class="form-control" placeholder={PlaceHolders} pattern={Patterns} required ></input>
      </div>
    );
  }
}

export default CampoDeTexto;

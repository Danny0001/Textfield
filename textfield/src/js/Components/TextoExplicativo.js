import React, {Component} from 'react';

class TextoExplicativo extends Component
{
  render(){
    return(
      <div className='TextoExplicativo'>
        <p>{this.props.Texto}</p>
      </div>

    );
  }
}

export default TextoExplicativo;

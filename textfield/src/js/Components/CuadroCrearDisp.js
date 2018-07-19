import React from 'react';
import './../../css/App.css'


class CuadroCrearDisp extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
    list:[],
    IdentificadorDisp:"",
    PassDevice:"",
  }
  this.handleChange = this.handleChange.bind(this);
  this.crearDispositivo = this.crearDispositivo.bind(this);
}


handleChange(event) {
  this.setState({[event.target.name]: event.target.value});
}

openTools() {
var btn = document.getElementById('btnTools');
console.log("hola");
var className = btn.className;

if (className === "pt-button pt-intent-success buttonadd") {
    className = "pt-button pt-intent-success buttonadd open";
    document.getElementById('migration-form').className = "CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer show active";
}

else {
    className = "pt-button pt-intent-success buttonadd";
    document.getElementById('migration-form').className = "CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer";
}

btn.className = className;
}
/*
handleSubmit(e) {
   e.preventDefault();
   if (!this.state.IdentificadorDisp.length) {
     return;
   }
   const newItem = {
     text: this.state.IdentificadorDisp,
     id: Date.now()
   };
   this.setState(prevState => ({
     items: prevState.items.concat(newItem),
     text: ''
   }));
 }
}
*/


crearDispositivo(e){
    e.preventDefault()
    const { IdentificadorDisp,PassDevice} = this.state
    if(typeof IdentificadorDisp === 'string' && IdentificadorDisp.length > 0) {

    console.log(IdentificadorDisp);
    }
    if(typeof PassDevice === 'string' && PassDevice.length > 0) {

    console.log(PassDevice);
    }
  }

  render() {
    return (
        <form id="migration-form" className="CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer" onSubmit={this.crearDispositivo}>
          <label onClick={this.openTools} className="close">x</label>
          <label className="titulodisp">Add Device</label>
          <label className="pt-label labeldisp">
             Device ID
            <input className= "pt-input inputdisp" type="text" name="IdentificadorDisp" value={this.state.IdentificadorDisp} onChange={this.handleChange} placeholder="Device ID" dir="auto"/>
          </label>
          <label className="pt-label labeldisp">
             Password Device
            <input className= "pt-input inputdisp" type="password" name="PassDevice" value={this.state.PassDevice} onChange={this.handleChange} placeholder="Password Device" dir="auto"/>
          </label>
          <button type="submit" className="pt-button buttonagreg" >Add</button>
      </form>
    );
  }
}

export default CuadroCrearDisp;

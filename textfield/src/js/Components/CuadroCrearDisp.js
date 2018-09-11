import React from 'react';
import axios from 'axios';
import './../../css/App.css'


class CuadroCrearDisp extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
    list:[],
    IdentificadorDisp:"",
    PassDevice:"",
    NameDevice:"",
    TypeDevice:"",
    token: localStorage.getItem("Cookie"),
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}


handleChange(event) {
  this.setState({[event.target.name]: event.target.value});
}

handleSubmit(){
  axios.post("http://localhost:3001/api/device",
  {
    id: this.state.IdentificadorDisp,
    type:'SONOFF_POW',
    password:this.state.PassDevice,
    name:this.state.NameDevice ,
})
this.associateDevice()
this.openTools
}

associateDevice(){

  axios.post('http://localhost:3002/api/user/05360643-ee4a-44fa-95e5-a4c3463bccd1/associateDevice',
    {
      id: this.state.IdentificadorDisp,
      password:this.state.PassDevice,
    },
    {headers:
      {
        'Content-Type':'application/x-www-form-urlencoded',
        authorization:this.state.token
    }
    }
  )

  alert(this.state.token)
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
        <form id="migration-form" className="CuadroCrearDisp pt-card .pt-elevation-4 .pt-interactive formcontainer" onSubmit={this.handleSubmit}>
          <label onClick={this.openTools} className="close">x</label>
          <label className="titulodisp">Add Device</label>
          <label className="pt-label labeldisp">
             Device ID
            <input className= "pt-input inputdisp" id="IdentificadorDisp" type="text" name="IdentificadorDisp" value={this.state.IdentificadorDisp} onChange={this.handleChange} placeholder="Device ID" />
          </label>
          <label className="pt-label labeldisp">
             Name
            <input className= "pt-input inputdisp" id="NameDevice" type="text" name="NameDevice" value={this.state.NameDevice} onChange={this.handleChange} placeholder="Nombre"/>
          </label>
          <label className="pt-label labeldisp">
             Password
            <input className= "pt-input inputdisp" id="PassDevice" type="password" name="PassDevice" value={this.state.PassDevice} onChange={this.handleChange} placeholder="Password"/>
          </label>
          <button type="submit" className="pt-button buttonagreg" >Add</button>
      </form>
    );
  }
}

export default CuadroCrearDisp;

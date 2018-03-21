import React, { Component } from 'react';
import CampoDeTexto from './CampoDeTexto.js';
import LineaInferior from './LineaInferior.js';
import TextoExplicativo from './TextoExplicativo.js';
import prub from './prub.js';
import Boton from './Boton.js';
import './../../css/App.css';

class Login extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      email:'',
      password:""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearAll(event) {
    this.setState({
      email: '',
      password: ''
    })
  }

  handleSubmit(event) {
    console.log("We are awesome !!");
    this.clearAll();
    event.preventDefault();
    //this.EmailValidator();
    const { email, password} = this.state
  }

  handleChange(event){
    console.log(event.target);
    this.setState({[event.target.name]: event.target.value});
  }

  /*EmailValidator(this.state.email){
    const email=(this.state.email) =>{
      if (!validator.isEmail(this.state.email)){
        return '${this.state.email} is not a valid email.'
      }
    };
  }*/

  render(){
    return(
      <div className="App">
        <form class="navbar-form" id="login" onSubmit={ this.handleSubmit }>
            <img className="logo" src='http://dragene.no/wp-content/uploads/2016/06/default1.jpg'/>
            <TextoExplicativo Texto={['Correo']}/>
            <CampoDeTexto
              id="email"
              value={this.state.email}
              Names={['email']} PlaceHolders={['Ingresa tu correo']}
              Types={['email']}  Patterns="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              onChange={ this.handleChange } />
            <TextoExplicativo Texto={['Contraseña']}/>
            <CampoDeTexto
              id="password"
              value={this.state.password}
              Names={['password']}
              PlaceHolders={['Ingresa tu contraseña']}
              Types={['password']}
              Patterns="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              onChange={ this.handleChange }/>

            <div className="link"><a href='http://www.google.com' className='ForgotPass'>Olvidaste tu contraseña?</a></div>
            <Boton Names={['Ingresar']}/>
          </form>
      </div>
    );
  }
}

export default Login;

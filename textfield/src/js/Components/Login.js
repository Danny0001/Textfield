import React, { Component } from 'react';
/*import { reduxForm, Field } from 'redux-form'*/
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import emailValidator from 'email-validator';
//import { ToastContainer, toast } from 'react-toastify';
//import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Redirect } from "react-router-dom";
//import Application from "./Application.js";

//import controllers from '../../../../server/api/user/controllers.js';
import CampoDeTexto from './CampoDeTexto.js';
//import LineaInferior from './LineaInferior.js';
import TextoExplicativo from './TextoExplicativo.js';
//import prub from './prub.js';
import Boton from './Boton.js';
import './../../css/App.css';

class Login extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      email:'',
      password:"",
      errors: {},
      isFetching: false,
      redirect:false,
      logged:false,
    };
    this.clearAll = this.clearAll.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  if (document.cookie) {
    this.setState({ logged:true })
  }
}

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  clearAll(event) {
    this.setState({
      email: '',
      password: '',
      errors: {},
      isFetching: false,
      redirect: false
    })
  }



  ValidateAll(email, password){
    let errors = {}

    if(isEmpty(email) ) {
      alert('Email Requerido')
      console.log('Email Requerido')
      errors.name = 'Email Requerido'
    }else{
      if(!emailValidator.validate(email) ) {
        alert('Email Invalido')
        console.log('Email Invalido')
        errors.email = 'Email Invalido'
      }
    }

    if(isEmpty(password) ) {
      alert('Password Requerido')
      console.log('Password Requerido')
      errors.name = 'Password Requerido'
    }

    return new Promise ((res, rej) =>{
      if(isEmpty(errors)){
        res()
      }
      else{
        this.setState({
          errors
        }, () =>{
          rej()
        })
      }
    })
  }

  /*createNotification (type) {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    }
  }
  */

  /*


async function getEmail(email) {
      const url = 'https://api.github.com/users/${email}'
      const response = await fetch(url)
      const json = await response.json()

      console.log(json)
    }*/

    /*  async function getEmail(email) {
            const url = 'https://api.github.com/users/${email}'
            const response = await fetch(url)
            const json = await response.json()

            console.log(json)
          }
*/

async handleSubmit(event) {
    event.preventDefault()

    const { email, password } = this.state
    this.setState({
      isFetching: true,
    });
    this.ValidateAll(email, password)
    axios({
        method: "POST",
        url: "http://localhost:8001/api/user/login",
        email: this.state.email,
        password:this.state.password
      })
    .then(async response => {
      console.log("Cookies are ", document.cookie)
      //const resemail = await fetch('api/user/login${email}')
      //const json = await resemail.json()
      //console.log("en .then")
      this.setState({
        redirect:true,
      })
      //console.log(json)
    })
    .catch((err) => {
      this.setState({
        isFetching: false,
      })})

    //this.ValidateAll(email, password)

   /*axios.post('/auth/exists',
        {email: this.email.value,
         password: this.password.value} )*/
  /*  .then(() => {
      this.setState({
        errors: {}
      })
      console.log("Registro Exitoso 1")
      this.createNotification('info')
      this.clearAll()
      alert("Registro Exitoso")
      //this.props.Login
      .then(() =>{
        this.clearAll()
        console.log("Registro Exitoso 2")
      })

    .catch((err) => {
      this.setState({
        isFetching: false,
      })
      console.log("Error en el Registro  !!!")
    })
    })

    .catch(() => {
      this.setState({
        isFetching: false,
      })
    })*/

}

  render(){
    const { errors, redirect,logged } = this.state
    return(
      <div className="App">
        {(redirect || logged) ? (
          <Redirect to="/app" />
        ) : (
        <form class="navbar-form" id="login" onSubmit={ this.handleSubmit }>
            <img className="logo" src='http://dragene.no/wp-content/uploads/2016/06/default1.jpg'/>
            <TextoExplicativo Texto={['Correo']}/>
            <CampoDeTexto
              className={ isEmpty( errors.email ) ? 'pt-input' : 'pt-input pt-intent-danger' }
              id="email"
              value={this.state.email}
              Names={'email'}
              PlaceHolders={['Ingresa tu correo']}
              Types={'email'}
              //Patterns="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              onChange={ this.handleChange} />
            <TextoExplicativo Texto={['Contraseña']}/>
            <CampoDeTexto
              className={ isEmpty( errors.password ) ? 'pt-input' : 'pt-input pt-intent-danger' }
              id="password"
              value={this.state.password}
              Names={['password']}
              PlaceHolders={['Ingresa tu contraseña']}
              Types={['password']}
              //Patterns="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              onChange={ this.handleChange }/>
            <div className="link"><a href='http://www.google.com' className='ForgotPass'>Olvidaste tu contraseña?</a></div>
            <Boton onClick={ this.handleClick } Names={['Ingresar']}/>
          </form>
        )}
      </div>
    );
  }
}

export default Login;

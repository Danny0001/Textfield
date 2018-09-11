import React, { Component } from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import emailValidator from 'email-validator';
import { Redirect } from "react-router-dom";
import CampoDeTexto from './CampoDeTexto.js';
import TextoExplicativo from './TextoExplicativo.js';
import NavBar from './NavBar.js';
import Boton from './Boton.js';
import './../../css/App.css';
import Logo from './../../css/imagenes/LOGO.png'
//import DropdownProfile from './DropDownProfile.js'
import { instanceOf } from 'prop-types';
import { Cookies } from 'react-cookie';
import SetAuthorizationToken from './../libs/SetAuthorizationToken.js';


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

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

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
          isFetching: false,
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
/*
    const { cookies } = this.props;
    cookies.set('name', name, { path: '/login' });
    this.setState({ name });
*/
    this.setState({
      isFetching: true,
    });
    this.ValidateAll(email, password)
    {/*axios({
        method: "POST",
        url: "http://localhost:3002/api/auth/signin",
        email: this.state.email,
        password:this.state.password
      })*/}
      axios.post("http://localhost:3002/api/auth/signin",
      {
        email: this.state.email,
        password:this.state.password
    })

    .then(async response => {
      console.log(document.cookie)
      console.log(response.data.token)
      SetAuthorizationToken(response.data.token)
      localStorage.setItem("Cookie",response.data.token);
      localStorage.setItem("Log",'true');
      console.log(localStorage.getItem("Cookie"))
      document.cookie = 'authorization =' + localStorage.getItem("Cookie") + '; max-age=' + 60*60 + ";path=/";

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
      })
      alert("Incorrect password or email!");
    })

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
      })  })*/

}
  render(){
    const { errors, redirect,logged } = this.state
    return(
      <div class="App bodyLog" id="large-header " >
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300" type="text/css" />
        {(redirect || logged) ? (
          <Redirect to="/Dashboard" />
        ) : (

        <form className="navbar-form CardLogin" id="login" onSubmit={ this.handleSubmit }>
            <img className="logo" alt="logo" src={Logo}></img>
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
              className={ isEmpty( errors.password ) ? 'pt-input ' : 'pt-input pt-intent-danger ' }
              id="password"
              value={this.state.password}
              Names={['password']}
              PlaceHolders={['Ingresa tu contraseña']}
              Types={['password']}
              //Patterns="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              onChange={ this.handleChange }/>
            <div className="link"><a href='http://www.google.com' className='ForgotPass'>Olvidaste tu contraseña?</a></div>
            <button onClick={ this.handleClick } className="ButtonLogin">Ingresar</button>
          </form>
        )}
      </div>
    );
  }
}

export default Login;

import React, { Component } from 'react';
import CampoDeTexto from './js/Components/CampoDeTexto.js';
import LineaInferior from './js/Components/LineaInferior.js';
import TextoExplicativo from './js/Components/TextoExplicativo.js';
import prub from './js/Components/prub.js';
import Boton from './js/Components/Boton.js';
import Login from './js/Components/Login.js';
import Home from './js/Components/Home.js';
import Application from './js/Components/Application.js';
import {BrowserRouter,Route} from 'react-router-dom';
import './css/App.css';


/*
const express = require('express')
const app = express()
*/
/*
import logger from 'morgan'
import mongoose from 'mongoose'
import passport from 'passport'
import kue from 'kue'

import { MONGO } from './js/config/config'
import routesBinder from './js/libs/Route'

const database  = process.env.MONGO_URL || MONGO.uri

mongoose.Promise = global.Promise; //mongoose uso de promesas es6
mongoose.connect(database);

var express = require('express')
var bodyParser = require("body-parser")



app.use(bodyParser());
*/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/app" component={Application}/>
        </div>
      </BrowserRouter>

      //<Login/>
    );
  }
}

//app.use(express.static("public"));
/*
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/kue', kue.app)

routesBinder(app)
*/

/*app.post("/procesarDatos", function(req,res){
  var email = req.body.email;
  console.log(email);
});*/
/*
app.get("/chaoo", function(req,res){
  res.send("bye");
});


app.get("/hola", function(req,res){
  res.send("HOOOla");
});

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Lo Sentimos, no hemos encontrado este recurso.'
  });
})

app.listen(3000, function(){
  console.log('servidos corriendo en el puerto 3000');
});*/
/*
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
})

*/
export default App;

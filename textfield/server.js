var express = require('express');
var parser = require("body-parser")
import logger from 'morgan'
import mongoose from 'mongoose'
import passport from 'passport'
import kue from 'kue'

import { MONGO } from './config/config'
import routesBinder from './libs/Route'

const database  = process.env.MONGO_URL || MONGO.uri

mongoose.Promise = global.Promise; //mongoose uso de promesas es6
mongoose.connect(database);


var app = express();

app.use(parser());
app.use(express.static("public"));

app.post("/procesarDatos", function(req,res){
  var email = req.body.email;
  console.log(email);
});

app.get("/chaoo", function(req,res){
  res.send("bye");
});


app.get("/hola", function(req,res){
  res.send("HOOOla");
});

app.listen(3000, function(){
  console.log('servidos corriendo en el puerto 3000');
});

module.exports = app;

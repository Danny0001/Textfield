import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {UserRoutes} from '../api';

import session from 'express-session';
var loopback = require('loopback');
var boot = require('loopback-boot');

const app = express();
var cors = require('cors');
var cookieParser = require('cookie-parser');
var session = require('express-session');




app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*");
                                  res.header('Access-Control-Allow-Credentials', true);
                                  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
                                  next(); });

//app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use (bodyParser.urlencoded({extended:false}));
app.use (bodyParser.json());
//app.use(cookieParser());
//app.use(loopback.token());

// Las cookies se crean en el servidor y son enviadas al cliente,
//así, con cada petición se envían implícitas.
app.use(session({
  secret: 'Sup3R$ecR3t'
  cookie: {
    httpOnly: true,
    expires: new Date(Date.now() + 60000)
  }
});

//app.use(session )
/*
app.use("/", function(req, res) {
  console.log(req.cookies);
});
*/
/*
app.get('/', function(req, res){
  res.cookie("aksdlnaskldnklasdas");
});
*/
app.use(logger('dev'));

app.use('/api',[UserRoutes]);

export default app;

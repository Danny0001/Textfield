import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {UserRoutes} from '../api';

const app = express();
var cors = require('cors');

app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header('Access-Control-Allow-Credentials', true);res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept"); next(); });
//app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use (bodyParser.urlencoded({extended:false}));
app.use (bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

app.use('/api',[UserRoutes]);


export default app;

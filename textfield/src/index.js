import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*
import { express } from './config/config'
import { createServer } from 'http'

const server = createServer(App)

function normalizePort(val) {
  const portNumber = parseInt(val, 10);
  if (isNaN(portNumber)) {
    // named pipe
    return val;
  }

  if (portNumber >= 0) {
    // portNumber number
    return portNumber;
  }

  return false;
}

const port = normalizePort(express.port);
App.set('port', port);

server.listen(port, () => {
    console.log('App Running in localhost:'+port)
})
*/


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

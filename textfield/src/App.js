import React, { Component } from 'react';
import Login from './js/Components/Login.js';
import Home from './js/Components/Home.js';
import Application from './js/Components/Application.js';
import Profile from './js/Components/Profile.js';
import Dashboard from './js/Components/Dashboard.js';
import Help from './js/Components/Help.js';
import EditProfile from './js/Components/EditProfile.js';
import {BrowserRouter,Route} from 'react-router-dom';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/app" component={Application}/>
          <Route exact path="/Profile" component={Profile}/>
          <Route exact path="/Dashboard" component={Dashboard}/>
          <Route exact path="/Help" component={Help}/>
          <Route exact path="/EditProfile" component={EditProfile}/>
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

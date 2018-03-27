var express = require('express');
var app = express();
var parser = require("body-parser")


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

var path = require('path')
var express = require('express')
var Env = require("envcrud").Env
var env = new Env(".env")


var app = express()

var staticPath = path.join(__dirname, '/app')

app.get('/node',function(req, res, err){
  env.loadVariables(function(envArray){
    env.getVariable("LEDGER_NODE", function(value){
      res.json({node: value.value})
    })
  })
})

app.use(express.static(staticPath))

app.listen(8000, function() {
  console.log('listening');
});
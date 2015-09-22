// Requires

var express = require('express');
var mongoose = require ("mongoose");

var app = express();
app.use(express.bodyParser());



// startup server
port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on port number: ", port);
});

module.exports = app;
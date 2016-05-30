var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var PORT = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'));


require("./controllers/controller.js")(app);

app.listen(PORT, function() {
  console.log('App running on port ' + PORT + ' !');
});
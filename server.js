// Dependencies
// Creating an instance of Express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
// Assigning a PORT. If no PORT is specified, default to 8080.
var PORT = process.env.PORT || 8080;

// Using morgan for Node -- logging the GET/POST requests in our app
app.use(logger('dev'));

// Using body-parser
app.use(bodyParser.urlencoded({
  extended: false
}));

// Assigning a route for static content; makes our public folder "visible"
app.use(express.static(__dirname + '/public'));

var staticContentFolder;
staticContentFolder = __dirname + '/app/public';

app.use('/static', express.static(staticContentFolder));

//Database configuration
mongoose.connect('mongodb://localhost/albumscraper');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Routes
require("./app/controllers/controller.js")(app);

// Listening for the PORT
app.listen(PORT, function() {
  console.log('App running on port ' + PORT + ' !');
});
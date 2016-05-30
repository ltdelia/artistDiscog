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

require("./app/controllers/controller.js")(app);

app.listen(PORT, function() {
  console.log('App running on port ' + PORT + ' !');
});
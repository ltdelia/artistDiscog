var express = require('express');
var app = express();

//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "zoo";
var collections = ["animals"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});

app.use(express.static('public'));

app.listen(8080, function() {
  console.log('App running on port 8080!');
});
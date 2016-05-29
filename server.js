var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "zoo";
var collections = ["animals"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});

app.use(express.static('public'));

require("./controllers/controller.js")(app);

app.listen(PORT, function() {
  console.log('App running on port ' + PORT + ' !');
});
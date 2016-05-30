var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
//Require Schema
var Album = require('../models/album.js');
var Note = require('../models/note.js');


module.exports = function(app){
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	app.get('/scrape', function(req, res){
		request('https://en.wikipedia.org/wiki/Randy_Newman_discography', function (error, response, html) {

		  var $ = cheerio.load(html, {ignoreWhitespace: true});
		      
		  $('table.wikitable').each(function(i, element){
			  var result = {};
		      var albums = $(element).find('td').children().find('b');
		      var dates = $(element).find('td').children().find("li:contains('Released')");
		      var labels = $(element).find('td').children().find("li:contains('Labels')");
		      var formats = $(element).find('td').children().find("li:contains('Format')");

		      for(var j=0; j<albums.length; j++){
		        result.album = albums.eq(j).text();
		        result.date = dates.eq(j).text();
		        result.label = labels.eq(j).text();
		        result.format = formats.eq(j).text();  

		        var record = new Album (result);

				record.save(function(err, doc) {
				  if (err) {
				    console.log(err);
				  } else {
				    console.log(doc);
				  }
				});		        
		      }
		    });
		});
		res.send("Scrape Complete!");
	});

	app.get('/albums', function(req, res){
		Album.find({}, function(err, doc){
			if (err){
				console.log(err);
			} else {
				res.json(doc);
			}
		});
	});

	app.get('/albums/:id', function(req, res){
		Album.findOne({'_id': req.params.id})
		.populate('note')
		.exec(function(err, doc){
			if (err){
				console.log(err);
			} else {
				res.json(doc);
			}
		});
	});

	app.post('/albums/:id', function(req, res){
		var Comment = new Note(req.body);

		Comment.save(function(err, doc){
			if(err){
				console.log(err);
			} else {
				Album.findOneAndUpdate({'_id': req.params.id}, {'note':doc._id})
				.exec(function(err, doc){
					if (err){
						console.log(err);
					} else {
						res.send(doc);
					}
				});

			}
		});
	});

}
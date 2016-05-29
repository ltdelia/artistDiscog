var request = require('request');
var cheerio = require('cheerio');


request('https://en.wikipedia.org/wiki/Randy_Newman_discography', function (error, response, html) {

  var $ = cheerio.load(html, {ignoreWhitespace: true});
  var result = [];    
  $('table.wikitable').each(function(i, element){

      var albums = $(element).find('td').children().find('b');
      var dates = $(element).find('td').children().find("li:contains('Released')");
      var labels = $(element).find('td').children().find("li:contains('Labels')");
      var formats = $(element).find('td').children().find("li:contains('Format')");

      for(var j=0; j<albums.length; j++){
        var album = albums.eq(j).text();
        var date = dates.eq(j).text();
        var label = labels.eq(j).text();
        var format = formats.eq(j).text();  
        result.push({
          album: album, 
          date: date, 
          label: label, 
          format: format
        });
      }
    });
  console.log(result);
});

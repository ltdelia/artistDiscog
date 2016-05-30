var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistSchema = new Schema({
	album:{
		type: String
	},
	date:{
		type: String
	},
	label:{
		type: String
	},
	format:{
		type: String
	},
});

var Artist = mongoose.model('Artist', ArtistSchema);
module.exports = Artist;
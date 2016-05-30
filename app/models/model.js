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

var ArtistData = mongoose.model('ArtistData', ArtistSchema);
module.exports = ArtistData;
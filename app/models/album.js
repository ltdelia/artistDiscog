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
	note: {
      type: Schema.Types.ObjectId,
      ref: 'Note'
  	}
});

var Album = mongoose.model('Album', ArtistSchema);
module.exports = Album;
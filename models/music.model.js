const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MusicSchema = new Schema({
	
	  name: {
		type: String,
		required: true
	  },
	  artist: {
		type: String,
		required: true
	  },
	  img: {
		type: String,
		required: true
	  },
	  audio: {
		type: String,
		required: true
	  }
});

const music = mongoose.model('Music',MusicSchema);

module.exports = music;
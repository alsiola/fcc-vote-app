var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	github: {
		id: String,
		displayName: String,
		username: String
	},
	polls: [{
		question: String,
		answers: [{
			answer: String,
			votes: Number
		}]
	}]
});

module.exports = mongoose.model('User', User);
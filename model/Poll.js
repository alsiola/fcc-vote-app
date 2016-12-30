var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
    user_github_id: String,
    question: String,
    answers: [{
        answer: String,
        votes: Number
    }]
});

module.exports = mongoose.model('Poll', Poll);
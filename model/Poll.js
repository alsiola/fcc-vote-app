var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
    _creator: {type: Schema.Types.ObjectId, ref: 'User'},
    question: String,
    answers: [{
        answer: String,
        votes: Number
    }]    
});

 module.exports = mongoose.model('Poll', Poll);
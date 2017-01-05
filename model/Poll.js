var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
    _creator: {type: Schema.Types.ObjectId, ref: 'User'},
    creation_date: {
        type: Date,
        default: Date.now
    },
    question: String,
    answers: [{
        answer: String,
        votes: [String]
    }]    
});

 module.exports = mongoose.model('Poll', Poll);
const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
    nickname:
    {
        type: String,
        required: true
    },
    score:
    {
        type: Number,
        required: true
    }
    
})

const Result = mongoose.model('Result', ResultSchema)

module.exports = Result;
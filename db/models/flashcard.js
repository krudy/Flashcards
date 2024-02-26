const mongoose = require('mongoose');

const Flashcard = mongoose.model('Flashcard', {
    polishWord: String,
    englishWord: String,
    type: String,
    polishExample: String,
    englishExample: String
})

module.exports = Flashcard;
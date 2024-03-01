const mongoose = require('mongoose');

const FlashcardSchema = new mongoose.Schema({
    polishWord:
    {
        type: String,
        required: true
    },
    englishWord:
    {
        type: String,
        required: true
    },
    type:
    {
        type: String,
        required: true
    },
    polishExample:
    {
        type: String,
        required: true
    },
    englishExample:
    {
        type: String,
        required: true
    }
})

const Flashcard = mongoose.model('Flashcard', FlashcardSchema)

module.exports = Flashcard;
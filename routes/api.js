const express = require('express');
const router = express.Router();


const flashcardActions = require('../actions/api/flashcardActions');

//getting all flashcards
router.get('/flashcards', flashcardActions.getAllFlashcards);
//getting random flashacard
router.get('/flashcards/random', flashcardActions.getRandomFlashcard);
//ading flashcard
router.post('/flashcards', flashcardActions.saveFlashcard);

module.exports = router;

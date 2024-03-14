const express = require('express');
const router = express.Router();

const flashcardActions = require('../actions/api/flashcardActions');
const resultActions =require('../actions/api/resultActions');

//getting all flashcards
router.get('/flashcards', flashcardActions.getAllFlashcards);
//getting random flashacard
router.get('/flashcards/random', flashcardActions.getRandomFlashcard);
//ading flashcard
router.post('/flashcards', flashcardActions.saveFlashcard);

// getting all results
router.get('/results', resultActions.getAllResults);         
//pobieranie konkretnej notatki
router.get('/results/:id', resultActions.getResult);
// dodawanie
router.post('/results', resultActions.saveResult);
// usuwanie
router.delete('/results/:id', resultActions.deleteResult);


module.exports = router;

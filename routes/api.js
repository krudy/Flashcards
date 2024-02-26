const express = require('express');
const router = express.Router();


const flashcardActions = require('../actions/api/flashcards');

router.get('/', flashcardActions.saveFlashcard);

module.exports = router;

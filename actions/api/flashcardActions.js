const Word = require('../../db/models/flashcard');

class FlashcardActions {
    saveFlashcard(req, res) {

        const newWord = new Word({
            polishWord: 'jabłko555',
            englishWord: 'apple555',
            type: 'noun',
            polishExample: 'Mark je jabłko',
            englishExample: 'Mark is eating an apple'
        });

        newWord.save().then(() => {
            console.log('word has been added successfully');
        });

        res.send('word has been added successfully');
    }

    getAllFlashcards(req, res) {
        res.send('api is working');
    }

    getRandomFlashcard(req, res) {
        res.send('..')
    }
}

module.exports = new FlashcardActions();
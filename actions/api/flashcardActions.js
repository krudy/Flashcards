const Word = require('../../db/models/flashcard');

class FlashcardActions {
    saveFlashcard(req, res) {
        const polishWord = req.body.polishWord;
           const englishWord = req.body.englishWord;
           const type = req.body.type;  
           const polishExample = req.body.polishExample;
           const englishExample = req.body.englishExample;    
        

        res.send(`word has been added successfully PL ${polishWord} EN ${englishWord} type ${type}`);
    }

    getAllFlashcards(req, res) {
        res.send('api is working');
    }

    getRandomFlashcard(req, res) {
        res.send('..')
    }
}

module.exports = new FlashcardActions();
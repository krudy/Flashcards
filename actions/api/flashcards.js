const Word = require('../../db/models/flashcard');

module.exports = {
    saveFlashcard(req, res) {
        
        const newWord = new Word({
            polishWord: 'jabłko', 
            englishWord: 'apple', 
            type: 'noun', 
            polishExample: 'Mark je jabłko', 
            englishExample: 'Mark is eating an apple'
        });
        
        newWord.save().then(() => {
            console.log('word has been added successfully');
        });

        res.send('word has been added successfully');
    }
}
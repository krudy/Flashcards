const Flashcard = require('../../db/models/flashcard');

class FlashcardActions {
    saveFlashcard(req, res) {
        const polishWord = req.body.polishWord;
        const englishWord = req.body.englishWord;
        const type = req.body.type;
        const polishExample = req.body.polishExample;
        const englishExample = req.body.englishExample;


        res.send(`word has been added successfully PL ${polishWord} EN ${englishWord} type ${type}`);
    }

    async getAllFlashcards(req, res) {
        let docs;
        try{
        docs = await Flashcard.find({});
        }catch(e){
            return res.status(500).json({message: e.message});
        }
        
        res.status(200).json(docs);
    }

    async getRandomFlashcard(req, res) {
        try {
            const count = await Flashcard.countDocuments();
            const randomIndex = Math.floor(Math.random() * count);
            const randomWord = await Flashcard.findOne().skip(randomIndex);
            
            res.json(randomWord);
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new FlashcardActions();
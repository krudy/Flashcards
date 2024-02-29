const Flashcard = require('../../db/models/flashcard');

class FlashcardActions {

    async saveFlashcard(req, res) {
        const polishWord = req.body.polishWord;
        const englishWord = req.body.englishWord;
        const type = req.body.type;
        const polishExample = req.body.polishExample;
        const englishExample = req.body.englishExample;


        let newFlashcard;

        try {
            newFlashcard = new Flashcard({
                polishWord: polishWord,
                englishWord: englishWord,
                type: type,
                polishExample: polishExample,
                englishExample: englishExample
            })
            await newFlashcard.save();
            
        } catch (error) {
            return res.status(422).json({message: error.message});
        }
        



        res.status(200).json(newFlashcard);
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
            
            res.status(200).json(randomWord);
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new FlashcardActions();
const Result = require("../../db/models/result");

class ResultActions {

    async saveResult(req, res) {

        const nickname = req.body.nickname;
        const score = req.body.score;

        let newResult;
        try{

            newResult = new Result({
               nickname: nickname,
               score: score
            });
            await newResult.save();
        }catch(err){
            return res.status(422).json({message: err.message});
        };
        
        res.status(200).json(newResult);
    }

    // getting all results
    async getAllResults(req, res) {

        let results;
        try {
            results = await Result.find({});

        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        console.log(results);
        res.status(201).json(results);
    }

    // getting a single result
    async getResult(req, res) {
        const id = req.params.id;
        const result = await Result.findOne({_id: id}); 
        res.status(200).json(result);
    }

    // deleting a single result
    async deleteResult(req, res) {
        const id = req.params.id;
        await Result.deleteOne({_id: id});
        res.sendStatus(204);
    }


}

module.exports = new ResultActions();
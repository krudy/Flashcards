import React from 'react';
import './Flashcards.css';
import Flashcard from './Flashcard/Flashcard';
import NewFlashcard from './NewFlashcard/NewFlashcard';
import NewResult from '../Results/NewResult/NewResult';
import axios from 'axios';

class Flashcards extends React.Component {

    constructor(props) {
        super(props);

        //referance to next button
        this.nextButtonRef = React.createRef();

        this.state = {

            flashcards: [],
            points: 0,
            game: 0,
            gameOver: false,
            isTheWinner: false,
           

        }


    }


    componentDidMount() {
        this.fetchNotes();
    }

    async fetchNotes() {
        const cards = [];
        for (let i = 0; i < 2; i++) {
            const res = await axios.get('http://localhost:9999/api/flashcards/random');
            const card = res.data;
            card.isCorrect = false;
            cards.push(card);
        }
        this.setState({ flashcards: cards });
    }



    CheckFlashcard(isCorrect) {
        if (isCorrect) {
            this.setState(prevState => ({ points: prevState.points + 1 }));
            this.setState(prevState => ({ game: prevState.game + 1 }));

        }

    }

    async AddFlashcard(flashcard) {
        await axios.post('http://localhost:9999/api/flashcards', flashcard);
    }

    async checkIsTheWinner(points) {
        const res = await axios.get('http://localhost:9999/api/results');
        const results = res.data;
        console.log(results);
  
        const isWinner = results.some(result => points > result.score);
        if(isWinner){
            this.setState({isTheWinner: true})
        }
            
            console.log('wartosc winner' + isWinner);
            
       
        return results;
    }

    async saveResult(result) {
        const res = await axios.post('http://localhost:9999/api/results', result);
        const results = await this.checkIsTheWinner(res.data);
        this.setState({ results: results });
    }



    async handleNextButton() {

    if (this.state.game === 0) {
        this.nextButtonRef.current.disabled = true;
        this.setState({ gameOver: true });
        this.checkIsTheWinner(this.state.points)
        return;
    }
    // clear flashcards state
    this.setState({ flashcards: [] });
    // get new flashcards
    this.fetchNotes();
    if (this.state.game === 2) {
        this.setState(prevState => ({ points: prevState.points + 1 }));
    }
    this.setState({ game: 0 });

}

render() {




    return (
        <div>

            <h1>Flashcards</h1>


            <NewFlashcard
                onAdd={(flashcard) => this.AddFlashcard(flashcard)} />

            <p className='points'>Points: {this.state.points}</p>
            {this.state.gameOver && <div className="gameOverMessage" ><h2>GAME OVER</h2></div>}
            <div className='flashcardsContainer'>
                {this.state.flashcards.map(flashcard => {

                    return (
                        <Flashcard
                            key={flashcard._id}
                            id={flashcard._id}
                            polishWord={flashcard.polishWord}
                            englishWord={flashcard.englishWord}
                            polishExample={flashcard.polishExample}
                            englishExample={flashcard.englishExample}
                            type={flashcard.type}
                            onCheck={(isCorrect) => this.CheckFlashcard(flashcard._id, isCorrect)}
                            bonus={flashcard.bonus}
                        />

                    )
                })}

            </div>
            <button ref={this.nextButtonRef} onClick={() => this.handleNextButton()} className='Next' >NEXT</button>

            {/* Wyświetlamy komponent NewResult po zakończeniu gry */}
            {this.state.isTheWinner && <NewResult points={this.state.points} />}
        </div>
    );
}
}

export default Flashcards;
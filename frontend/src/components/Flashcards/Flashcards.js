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

    // getting two random flashcards to display
    async fetchNotes() {
        const cards = [];
        for (let i = 0; i < 2; i++) {
           try {
               const res = await axios.get('http://localhost:9999/api/flashcards/random');
               const card = res.data;
               card.isCorrect = false;
               cards.push(card);
           } catch (error) {
               console.error("Error fetching flashcard:", error);      
               i--; 
           }
        }
        console.log(cards);
        this.setState({ flashcards: cards });
    }


    //addin points to sattes - points and game
    CheckFlashcard(isCorrect) {
        if (isCorrect) {
            this.setState(prevState => ({ points: prevState.points + 1 }));
            this.setState(prevState => ({ game: prevState.game + 1 }));

        }

    }

    //post new flashcard
    async AddFlashcard(flashcard) {
        await axios.post('http://localhost:9999/api/flashcards', flashcard);
    }

    async checkIsTheWinner(points) {
        const res = await axios.get('http://localhost:9999/api/results');
        const results = res.data;
    
        let isWinner = false;
    
        // Checking whether the number of points is greater than the score of the top 10 players
        if (results.length >= 10) {
            const topTenScores = results.slice(0, 10).map(result => result.score);
            const minTopTenScore = Math.min(...topTenScores);
            if (points > minTopTenScore) {
                isWinner = true;
            }
        } else {
            // set a player as the winner if there are not 10 results in the database
            isWinner = true;
        }
    
        if (isWinner) {
            this.setState({ isTheWinner: true });
        }
    
        return results;
    }

    async saveResult(result) {
        await axios.post('http://localhost:9999/api/results', result);  
        window.location.reload();
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
        <div className='app-container'>

            <NewFlashcard
                onAdd={(flashcard) => this.AddFlashcard(flashcard)} />

            <p className='points'>Your Score<br/>{this.state.points}</p>
            {/* Wyświetlamy komponent NewResult po zakończeniu gry */}
            {this.state.isTheWinner && <NewResult points={this.state.points} onAdd={this.saveResult}/>}
        
           
            <div className='flashcardsContainer'>
                {this.state.flashcards.map((flashcard, index) => {

                    return (
                        <Flashcard
                            key={index}
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
            <button ref={this.nextButtonRef} onClick={() => this.handleNextButton()} className='next-btn' >NEXT</button>

            
        </div>
    );
}
}

export default Flashcards;
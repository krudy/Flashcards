import React from 'react';
import './Flashcards.css';
import Flashcard from './Flashcard/Flashcard';
import NewFlashcard  from './NewFlashcard/NewFlashcard';
import axios from 'axios';

class Flashcards extends React.Component {

    constructor(props) {
        super(props);

        //referance to next button
        this.nextButtonRef = React.createRef(); 

        this.state = {
            
            flashcards: [],
            points: 0,
            game: 0
        }

        
    }

    
    componentDidMount() {
        this.fetchNotes();     
    }
    
    async fetchNotes() {  
    const cards = [];
    for(let i = 0; i < 2; i++) {
        const res =  await axios.get('http://localhost:9999/api/flashcards/random');
        const card = res.data;
        card.isCorrect = false; 
        cards.push(card);
    }
      this.setState({flashcards: cards});
    }

    

    CheckFlashcard(isCorrect) {
        if (isCorrect) {
            this.setState(prevState => ({ points: prevState.points + 1 }));
            this.setState(prevState => ({ game: prevState.game + 1}));
            
        }
        
    }

    async AddFlashcard(flashcard) {
       await axios.post('http://localhost:9999/api/flashcards', flashcard);
    }

    handleNextButton() {
        
        if (this.state.game === 0 ) {
            this.nextButtonRef.current.disabled = true;
            return;
        }
        this.setState({ flashcards: [] }); // Wyczyść istniejące fiszki z stanu
        this.fetchNotes(); // Pobierz nowe fiszki
        if(this.state.game === 2){
            this.setState(prevState => ({ points: prevState.points + 1 }));
        }
        this.setState({ game: 0});
        
    }

    render() {




        return (
            <div>

                <h1>Flashcards</h1>


                <NewFlashcard
                    onAdd={(flashcard) => this.AddFlashcard(flashcard)}/>

                    <p className='points'>Points: {this.state.points}</p>

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
            </div>
        );
    }
}

export default Flashcards;
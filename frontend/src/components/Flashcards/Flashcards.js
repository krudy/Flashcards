import React from 'react';
import './Flashcards.css';
import Flashcard from './Flashcard/Flashcard';
import NewFlashcard  from './NewFlashcard/NewFlashcard';
import axios from 'axios';

class Flashcards extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
            flashcards: []
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
        cards.push(card);
    }
      this.setState({flashcards: cards});
    }

    CheckFlashcard(id) {
        console.log('cheking card');
        
    }

    async AddFlashcard(flashcard) {
       await axios.post('http://localhost:9999/api/flashcards', flashcard);
    }

    render() {




        return (
            <div>

                <h1>Flashcards</h1>

                <NewFlashcard
                    onAdd={(flashcard) => this.AddFlashcard(flashcard)}/>

                <div className='flashcardsContainer'>
                    {this.state.flashcards.map(flashcard => {
                        return (
                           <Flashcard 
                            key={flashcard._id}
                            id={flashcard.id}
                            polishWord={flashcard.polishWord}
                            englishWord={flashcard.englishWord}
                            polishExample={flashcard.polishExample}
                            englishExample={flashcard.englishExample}
                            type={flashcard.type}
                            
                            />

                        )
                    })}

                </div>
                <button className='Next'>NEXT</button>
            </div>
        );
    }
}

export default Flashcards;
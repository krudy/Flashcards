import React from 'react';
import './Flashcards.css';
import Flashcard from './Flashcard/Flashcard';

class Flashcards extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
            flashcards: [
                {
                    id: 1234,
                    polishWord: 'kot',
                    englishWord: 'cat',
                    type: 'noun',
                    polishExample: 'Ania ma kota',
                    englishExample: 'Ania has a cat'
                },
                {
                    id: 1235,
                    polishWord: 'pies',
                    englishWord: 'dog',
                    type: 'noun',
                    polishExample: 'Maja ma psa',
                    englishExample: 'Maja has a dog'
                }
            ]
        }

        
    }

    CheckFlashcard(id) {
        console.log('cheking card');
        
    }

    render() {




        return (
            <div>

                <h1>Flashcards</h1>

                <div className='flashcardsContainer'>
                    {this.state.flashcards.map(flashcard => {
                        return (
                           <Flashcard 
                            key={flashcard.id}
                            id={flashcard.id}
                            polishWord={flashcard.polishWord}
                            englishWord={flashcard.englishWord}
                            polishExample={flashcard.polishExample}
                            englishExample={flashcard.englishExample}
                            type={flashcard.type}
                            //onCheckClick = {(id) => this.CheckFlashcard(id)}
                            />

                        )
                    })}

                </div>
            </div>
        );
    }
}

export default Flashcards;
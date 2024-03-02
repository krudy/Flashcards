import React from 'react';
import './Flashcards.css';
import Flashcard from './Flashcard/Flashcard';

class Flashcards extends React.Component {

    constructor(props) {
        super(props);
        this.flashcards = [
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

    render() {




        return (
            <div>

                <h1>Flashcards</h1>

                <div className='flashcardsContainer'>
                    {this.flashcards.map(flashcard => {
                        return (
                           <Flashcard 
                            polishWord={flashcard.polishWord}
                            polishExample={flashcard.polishExample}
                            type={flashcard.type}/>
                        )
                    })}

                </div>
            </div>
        );
    }
}

export default Flashcards;
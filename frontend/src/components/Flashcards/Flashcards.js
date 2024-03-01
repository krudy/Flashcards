import React from 'react';
import './Flashcards.css';

class Flashcards extends React.Component {

    render() {
        return (
            <div>

                <h1>Flashcards</h1>
            
            <div className='flashcardsContainer'>

                <div className='flashcard'>
                    <p>kot</p>
                    <div className='polishExample'>
                        Ania ma kota
                    </div>
                    <input type='text' className='inputWord'></input>
                    <button className='Check'>Check</button>
                </div>

                <div className='flashcard'>
                    <p>pies</p>
                    <div className='polishExample'>
                        Maja ma psa
                    </div>
                    <input type='text' className='inputWord'></input>
                    <button className='Check'>Check</button>
                </div>
            </div>
            </div>
        );
    }
}

export default Flashcards;
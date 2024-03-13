import React, { useState } from "react";

function Flashcard(props) {

    const [showTranslation, setShowTranslation] = useState(false);
    const [inputText, setInputText] = useState('');
    const [isCheckButtonEnabled, setIsCheckButtonEnabled] = useState(true);
  
   

    const toggleTranslation = () => {
        setShowTranslation(true);
        if (inputText === props.englishWord) {
           
            // send info aboot correct answer to Flashcards
            props.onCheck(true);
            

        }
        setIsCheckButtonEnabled(false);
    }

    //updates the value of the inputword in real time
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }

    return (
        <div className='flashcard'>
            <p>({props.type})</p>
            <p><strong>{props.polishWord}</strong></p>
            {showTranslation && (<p><strong>{props.englishWord}</strong></p>)}
            <div className='polishExample'>{props.polishExample}</div>
            {showTranslation && (<p><strong>{props.englishExample}</strong></p>)}
            <input
                type='text'
                className='inputWord'
                value={inputText}
                onChange={handleInputChange}></input>
            <button
                className='Check'
                onClick={toggleTranslation}
                disabled={!isCheckButtonEnabled}>Check</button>
        </div>
    );
}

export default Flashcard;
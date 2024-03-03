import React, {useState} from "react";

function Flashcard(props) {

   const [showTranslation, setShowTranslation] = useState(false);

   const toggleTranslation = () =>{
    setShowTranslation(!showTranslation);
   }

    return (
        <div className='flashcard'>
        <p>({props.type})</p>
        <p><strong>{props.polishWord}</strong></p>
        {showTranslation && (<p><strong>{props.englishWord}</strong></p>)}
        <div className='polishExample'>{props.polishExample}</div>
        {showTranslation && (<p><strong>{props.englishExample}</strong></p>)}
        <input type='text' className='inputWord'></input>
        <button 
            className='Check' 
            onClick={toggleTranslation}>Check</button>
    </div>
    );
}

export default Flashcard;
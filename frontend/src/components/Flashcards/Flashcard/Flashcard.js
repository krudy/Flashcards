import React from "react";

function Flashcard(props) {
    return (
        <div className='flashcard'>
        <p><strong>{props.polishWord}</strong></p>
        <p>({props.type})</p>
        <div className='polishExample'>{props.polishExample}</div>
        <input type='text' className='inputWord'></input>
        <button className='Check'>Check</button>
    </div>
    );
}

export default Flashcard;
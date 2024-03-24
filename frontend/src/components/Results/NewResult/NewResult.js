import React, { useState } from "react";
import "./NewResult.css"

function NewResult(props) {


    const [nickname, setNickname] = useState('');


    const changeNicknameHandler = (event) => {
        const value = event.target.value;
        setNickname(value);
    }


    const addResult = (score) => {
        const result = {
            nickname: nickname,
            score: score
        };

        props.onAdd(result);

        setNickname('');

    }

    return (
        <div className="overlay">
            <div className='player-result'>
                <label >Your score</label>
                <p className="score">{props.points}</p>

                <label>Enter your nickname:</label>
                <input type='text'
                    value={nickname}
                    onChange={changeNicknameHandler} />

                <button className="save-score-btn" onClick={() => addResult(props.points)} >Save Your Score</button>
            </div>
        </div>  
    );
}

export default NewResult;
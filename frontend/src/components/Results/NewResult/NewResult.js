import React, {useState} from "react";

function NewResult(props) {

    
    const [nickname, setNickname] = useState('');
    

    const changeNicknameHandler = (event) =>{ 
        const value =  event.target.value;
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
        
        <div className = 'result'>
            <label>Your score</label>
            <p>{props.points}</p>
            
            <label>Enter your nickname:</label>
            <input type = 'text' 
            value = {nickname}
            onChange = {changeNicknameHandler}/>

            <button className="saveYourScore" onClick={() => addResult(props.points)} >Save Your score</button>
        </div>
        
    );
}

export default NewResult;
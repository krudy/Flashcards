import React, {useState} from "react";

function NewResult(props) {

    const [showForm, setShowForm] = useState(false);
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
        setShowForm(false);
    }

    return (
        showForm ? (
        <div className = 'result'>
            <label>Your score</label>
            <p>wynik</p>
            
            <label>Enter your nickname:</label>
            <input type = 'text' 
            value = {nickname}
            onChange = {changeNicknameHandler}/>

            <button onClick={() => addResult()} >Add Note</button>
        </div>
        ) : ( 
            <button onClick={() => {setShowForm(true)}}>New note</button>
        )
    );
}

export default NewResult;
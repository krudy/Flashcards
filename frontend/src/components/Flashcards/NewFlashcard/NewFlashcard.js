import React, {useState} from "react";

function  NewFlashcard(props) {

    const [polishWord, setPolishWord] = useState('');
    const [englishWord, setEnglishWord] = useState('');
    const [type, setType] = useState('');
    const [polishExample, setPolishExample] = useState('');
    const [englishExample, setEnglishExample] = useState('');

    const changePolishWordhandler = (event) => {
        const value = event.target.value;
        setPolishWord(value);
    }

    const changeEnglishWordhandler = (event) => {
        const value = event.target.value;
        setEnglishWord(value);
    }

    const changeTypehandler = (event) => {
        const value = event.target.value;
        setType(value);
    }

    const changePolishExamplehandler = (event) => {
        const value = event.target.value;
        setPolishExample(value);
    }

    const changeEnglishExamplehandler = (event) => {
        const value = event.target.value;
        setEnglishExample(value);
    }

    return(
        <div className="flashcard">
            <label>word in Polish</label>
            <input 
                type="text"
                value={polishWord}
                onChange={changePolishWordhandler}
            ></input>
            <br/>
            <label>word in English</label>
            <input 
                type="text"
                value={englishWord}
                onChange={changeEnglishWordhandler}
            ></input>
            <br/>
            <label>part of speech</label>
            <input 
                type="text"
                value={type}
                onChange={changeTypehandler}
            ></input>
            <br/>
            <label>Example use in a Polish sentence</label>
            <input 
                type="text"
                value={polishExample}
                onChange={changePolishExamplehandler}
            ></input>
            <br/>
            <label>Example use in a English sentence</label>
            <input 
                type="text"
                value={englishExample}
                onChange={changeEnglishExamplehandler}
            ></input>

            <button>Add this flashcard</button>
        </div>
    );
}

export default NewFlashcard;
import React, {useState} from "react";
import "./NewFlashcard.css";

function  NewFlashcard(props) {

    const [showForm, setShowForm] = useState(false)
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

    const AddFlashcard = () => {
        const flashcard ={
            polishWord: polishWord,
            englishWord: englishWord,
            polishExample: polishExample,
            englishExample: englishExample,
            type: type
            
        }
        props.onAdd(flashcard)

        setPolishWord('');
        setEnglishWord('');
        setType('');
        setPolishExample('');
        setEnglishExample('');

        
    }

    return(
        showForm ? (
        <div className="new-flashcard-form">
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
            <label>Example use in a Polish</label>
            <input 
                type="text"
                value={polishExample}
                onChange={changePolishExamplehandler}
            ></input>
            <br/>
            <label>Example use in a English</label>
            <input 
                type="text"
                value={englishExample}
                onChange={changeEnglishExamplehandler}
            ></input>

            <button className="add-flashcard-btn" onClick={AddFlashcard}>Add Flashcard</button>
            <br/>
            <button className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
        </div>
        ) : (
           <button className="add-new-card-button" onClick={() => setShowForm(true)}>Add New Flashcard</button> 
        )
    );
}

export default NewFlashcard;
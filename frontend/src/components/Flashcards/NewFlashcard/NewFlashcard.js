import React from "react";

function  NewFlashcard(props) {
    return(
        <div className="flashcard">
            <label>word in Polish</label>
            <input type="text"></input>
            <br/>
            <label>word in English</label>
            <input type="text"></input>
            <br/>
            <label>part of speech</label>
            <input type="text"></input>
            <br/>
            <label>Example use in a Polish sentence</label>
            <input type="text"></input>
            <br/>
            <label>Example use in a English sentence</label>
            <input type="text"></input>
        </div>
    );
}

export default NewFlashcard;
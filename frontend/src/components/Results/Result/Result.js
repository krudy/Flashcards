import React from "react";
import '../Results.css'

function Result(props) {


    return (
        <div className='result'>
            <p><span className="index">{props.index + 1}</span>&nbsp;&nbsp;<strong>{props.score}</strong>&nbsp;&nbsp;&nbsp;{props.nickname}</p>
         
        </div>
    );
}

export default Result;
import React from "react";

function Result(props) {


    return (
        <div className='result'>
            <p><strong>{props.score}</strong>&nbsp;&nbsp;&nbsp;{props.nickname}</p>
         
        </div>
    );
}

export default Result;
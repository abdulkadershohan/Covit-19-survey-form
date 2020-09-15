import React, { useState } from 'react';
import  './Answer.css'


const AnswerList =(props)=>{
    let answerlist=Object.keys(props.answer)
        .map((qAnswer,i)=>(
            <li className={

                props.correctAnswer === "1" ?
                    'correct' :''


            }
                onClick={() => props.checkAnswer(qAnswer)}
                key={qAnswer}

            >
                {props.answer[qAnswer]}
            </li>

        ));
    return(
        <div className={"AnswerList"}>
           <ul>
               {answerlist}
           </ul>
        </div>
    );
}

export  default AnswerList;
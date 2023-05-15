import React from 'react';
import '../styles/questionstyles.css'
import '../styles/style1.css'

const QuestionDisplay = (props) => {
    function showAnswer() {
        document.getElementsByClassName("question-content")[0].innerHTML += (
            `<div class="question-answer"><span class="answer-header">Answer:</span> ${props.a}</div>`
        );
    }

    return (
        <div className="game-section-question" id="game-section-question">
            <div className="game-info-container">
                <h2 className="game-title">{props.topic} - <span style={{color:"white"}}>${props.score}</span></h2>
            </div>
            <div className="question-content">
                {props.q}
                <button className="show-answer-button" onClick={showAnswer}>
                    Show Answer
                </button>
            </div>
            <button className="question-display-return-button" onClick={props.returnFunc}>
                <img className="question-display-return-icon" src="https://www.svgrepo.com/show/274262/return.svg" alt="Return to Game"></img>
            </button>
        </div>
    );
};

export default QuestionDisplay;
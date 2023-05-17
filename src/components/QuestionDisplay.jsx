import React from 'react';
import '../styles/questionstyles.css'
import '../styles/style1.css'

const QuestionDisplay = (props) => {
    function showAnswer() {
        document.getElementById("question-content").innerHTML += (
            `<div class="question-answer" id="question-answer"><span class="answer-header">Answer:</span> ${props.a}</div>`
        );

        const button = document.getElementById("show-answer-button");
        button.innerHTML = "Hide Answer";
        button.onclick = hideAnswer;
        button.style.backgroundImage =
            "linear-gradient(90deg, rgb(154, 92, 77), rgb(139, 134, 40))";
    }
    function hideAnswer() {
        document.getElementById("question-answer").remove();

        const button = document.getElementById("show-answer-button");
        button.innerHTML = "Show Answer";
        button.onclick = showAnswer;
        button.style.backgroundImage =
            "linear-gradient(90deg, rgb(77, 87, 154), rgb(40, 134, 139))";
    }

    return (
        <div className="game-section-question" id="game-section-question" style={props.hasBackgroundImage?
            {backgroundImage: `url(${props.gameData.background})`, backgroundSize: "cover"} : {}}>
            <div className="game-info-container">
                <h2 className="game-title">{props.topic} - <span style={{color:"white"}}>${props.score}</span></h2>
            </div>
            <div className="question-content" id="question-content">
                {props.q}
                <button className="show-answer-button" id="show-answer-button" onClick={showAnswer}>
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
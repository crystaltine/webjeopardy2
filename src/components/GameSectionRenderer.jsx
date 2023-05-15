import React from 'react';
import JeopardyGame from './JeopardyGame';
import QuestionDisplay from './QuestionDisplay';
import '../styles/style1.css'


const GameSectionRenderer = (props) => {

    const renderQuestion = props.questionData !== "";

    let questionData;
    if (renderQuestion) {
        questionData = JSON.parse(props.questionData);
    }

    return (renderQuestion?
        <QuestionDisplay
            q={questionData.data.question}
            a={questionData.data.answer}
            topic={questionData.topic}
            score={questionData.data.score}
            returnFunc={props.returnFromQuestionDisplay}/>
        :
        <div key={props.gameData.title} className="game-section" id="game-section">
            <div className="game-info-container">
                <h2 className="game-title">{props.gameData.title}</h2>
                <h3 className="game-desc">{props.gameData.description}</h3>
            </div>
            <div className="game-container" id="game-container">
                <JeopardyGame gameData={props.gameData.content} gameName={props.gameName} selectItem={props.onChooseItem}/>
            </div>
            <button className="reset-game-button" onClick={props.onResetGame}>
                <img className="reset-game-icon" src="https://www.svgrepo.com/show/175356/circular-arrow.svg" alt="Reset Board"></img>
            </button>
        </div>
    )
};

export default GameSectionRenderer;
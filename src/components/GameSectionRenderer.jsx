import React from 'react';
import JeopardyGame from './JeopardyGame';
import QuestionDisplay from './QuestionDisplay';
import '../styles/style1.css'


const GameSectionRenderer = (props) => {

    let hasBackgroundImage;
    try {
        hasBackgroundImage = props.gameData.background !== undefined
        console.log(props.gameData.background);
    } catch (e) {
        hasBackgroundImage = false;
    }

    const renderQuestion = props.questionData !== "";

    let questionData;
    if (renderQuestion) {
        questionData = JSON.parse(props.questionData);
    }
    try {
        return (renderQuestion?
            <QuestionDisplay
                q={questionData.data.question}
                a={questionData.data.answer}
                topic={questionData.topic}
                score={questionData.data.score}
                returnFunc={props.returnFromQuestionDisplay}
                hasBackgroundImage={hasBackgroundImage}
                gameData={hasBackgroundImage? props.gameData : undefined}
                />
            :
            <div key={props.gameData.title} className="game-section" id="game-section" style={hasBackgroundImage?
                {backgroundImage: `url(${props.gameData.background})`, backgroundSize: "cover"} : {}}>
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
    } catch (e) {
        return <div style={{color:"#fcc658"}}>Use the sidebar on the left to select a game!</div>
    }
};

export default GameSectionRenderer;
import React from 'react';
import QuestionGrid from './QuestionGrid';
import "../styles/style1.css"

const JeopardyGame = (props) => {
    return (
        <div className='jeopardy-game-container'>
            <QuestionGrid questionJSON={props.gameData} gameName={props.gameName} selectItem={props.selectItem}/>
        </div>
    );
};

export default JeopardyGame;
import React from 'react';
import QuestionGrid from './QuestionGrid';

const JeopardyGame = (props) => {
    return (
        <div className='jeopardy-game-container'>
            <QuestionGrid questionJSON={props.gameData}/>
        </div>
    );
};

export default JeopardyGame;
import React from 'react';
import GridItem from './GridItem';
/*
* props.questionJSON: generic.content (see ../../generic.json)
*/
const QuestionGrid = (props) => {
    return (
        <div className="jeopardy-grid">
            {props.questionJSON.map((col, colIndex) => {
                return (
                    <div className="grid-col" key={colIndex}>
                        {col.colName}

                        {col.colItems.map((item, itemIndex) => {
                            return (
                                <GridItem score={item.score} q={item.question} a={item.answer} />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default QuestionGrid;
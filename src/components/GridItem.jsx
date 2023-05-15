import React from 'react';

/*
* props.score: int
* props.q: string
* props.a: string
*/

const GridItem = (props) => {
    return (
        props.visited?
        <div className={`jeopardy-item ${props.visited? "highlight-red" : "highlight-green"}`}>
            {props.score}
        </div> :
        <button
            className={`jeopardy-item ${props.visited? "highlight-red" : "highlight-green"}`} 
            onClick={() => props.selectItem(props.colIndex, props.itemIndex)}
            >
            {props.score}
        </button>
    );
};

export default GridItem;
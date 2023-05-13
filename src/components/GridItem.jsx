import React from 'react';

/*
* props.score: int
* props.q: string
* props.a: string
*/

const GridItem = (props) => {
    return (
        <div className='jeopardy-item'>
            {props.score}
            <a href="https://www.google.com">sdfs</a>
        </div>
    );
};

export default GridItem;
import React from 'react';

/*
* props.onSelectGameData: function
*/

const SideBar = (props) => {
    return (
        <div className='sidebar-container'>
            <button onClick={props.onSelectGameData} className='select-button'>Select Generic Jeopardy</button>
        </div>
    );
};

export default SideBar;
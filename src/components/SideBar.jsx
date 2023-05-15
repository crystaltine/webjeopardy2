import React from 'react';
import "../styles/sidebarstyles.css"

/*
* props.onSelectGameData: function
*/

const SideBar = (props) => {

    const keys = Object.keys(localStorage)

    return (
        <div className='sidebar-container'>
            <h1>Saved Quizzes</h1>
            {keys.map((key, index) => {
                if (key.startsWith('webjeopardy:')) {
                    return (
                        <button
                            onClick={() => props.onSelectGameData(key)}
                            className={`select-button${key === props.currSelectedGame? " selected-game" : ""}`}
                        ><span className={key === props.currSelectedGame? "selected-button-text" : "button-text"}>
                            {JSON.parse(localStorage.getItem(key)).title}
                        </span>
                        </button>
                    );
                } else {
                    return null;
                }
            })}

            <button className="import-json-button" onClick={props.openImportMenu}>
                <img className="import-json-icon" src="https://www.svgrepo.com/show/507611/code-alt.svg" alt="Import Game"></img>
            </button>
        </div>
    );
};

export default SideBar;
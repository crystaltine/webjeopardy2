import SideBar from "./components/SideBar";
import GameSectionRenderer from "./components/GameSectionRenderer";
import { useState } from "react";
import './styles/style1.css'

export default function App() {
  
  const [gameData, setGameData] = useState(JSON.parse(localStorage.getItem('webjeopardy:pf2template')));
  const [gameName, setGameName] = useState('webjeopardy:pf2template');
  const [currRenderedQuestionData, setCurrRenderedQuestionData] = useState("");

  function onSelectGameData(gameName) {
    const newGameData = JSON.parse(localStorage.getItem(gameName));
    if (gameData !== newGameData) {
      setGameData(newGameData);
      setGameName(gameName);
    }
    setCurrRenderedQuestionData("");
  }

  function onResetGame() {
    setGameData(JSON.parse(localStorage.getItem(gameName)));
    togglePopup("game-reset-popup", true);
  }

  function onChooseItem(cid, iid) {

    let newGameData = structuredClone(gameData);
    newGameData.content[cid].colItems[iid].visited = true;
    setGameData(newGameData);

    setCurrRenderedQuestionData(JSON.stringify({
      "data": newGameData.content[cid].colItems[iid],
      "topic": newGameData.content[cid].colName
    }));
  }

  function returnFromQuestionDisplay() {
    setCurrRenderedQuestionData("");
  }

  function togglePopup(id, visibility) {
    let popupBg = document.getElementById("popup-bg");
    let popupContent = document.getElementById(id);
    popupBg.style.visibility = visibility? "visible" : "hidden";
    popupContent.style.visibility = visibility? "visible" : "hidden";
  }
  
  function load(url) {
    const name = "webjeopardy:" + url.split("/").pop().slice(0, -5);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // successful
          localStorage.setItem(name, JSON.stringify(data));
          togglePopup("import-menu-popup", false);
          onSelectGameData(name);
          document.getElementById("import-error-text").style.visibility = "hidden";
      })
      .catch(err => {
        console.log("[ERROR] Error while importing: " + err);
        document.getElementById("import-error-text").style.visibility = "visible";
      });
  }

  return (
    <div className="App">
      <SideBar onSelectGameData={onSelectGameData} currSelectedGame={gameName} openImportMenu={
        () => {
          togglePopup("import-menu-popup", true);
        }
      }/>
      <div className="main-container">
        <div className="App-header">
          Webjeopardy Release 1.0<button className="header-button">
            <a href="https://github.com/hogridr/webjeopardy2" target="_blank" rel="noopener noreferrer">
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="header-button-img" alt="Github"></img>
            </a>
          </button>
        </div>
        <GameSectionRenderer
          gameData={gameData}
          gameName={gameName}
          onChooseItem={onChooseItem}
          onResetGame={onResetGame}
          questionData={currRenderedQuestionData}
          returnFromQuestionDisplay={returnFromQuestionDisplay}/>
      </div>
      <div id="popup-bg">

        <div className="import-menu-popup" id="import-menu-popup">
          <h1 className="import-popup-title">Import Custom Game</h1>
          <div id="input-container">
            JSON File or API URL: <input id="url-input" className="popup-input"></input>
            <button className="open-json-documentation-button" onClick={() => {
              togglePopup("popup-json-documentation", true);
            }}><img src="https://www.svgrepo.com/show/511031/info.svg" className="open-documentation-button-img" alt="Open Documentation"></img></button>

            <span class='import-error-text' id="import-error-text">Unable to import game. Check console (Ctrl+Shift+J) for details.</span>
          </div>
          <button
            className="json-load-button"
            onClick={() => {
              load(document.getElementById("url-input").value);
            }}>
            Load
          </button>
          <button className="popup-close-button" onClick={
            () => {
              togglePopup("import-menu-popup", false);
              document.getElementById("import-error-text").style.visibility = "hidden";
            }
          }>
            <img src="https://www.svgrepo.com/show/510922/close-sm.svg" className="popup-close-button-img" alt="Close Menu"></img>
          </button>
        </div>

        <div id="popup-json-documentation" className="popup-json-documentation">
          <h1>Custom JSON Documentation</h1>
          <p>Custom games can be written in JSON format only, for now. 
            Inline editor might come soon, but for now, only fetchable URLs can be imported as custom games.<br></br><br></br>
            JSON files representing a game must consist of one object with four properties: <code>title</code>, <code>description</code>, <code>background</code> (optional), and <code>content</code>.<br></br><br></br>
            Both <code>title</code> and <code>description</code> should be strings, preferrably short.<br></br><br></br>
            <code>background</code> is an optional URL of the background image of the game.<br></br><br></br>
            
            <code>content</code> is an array of objects, each representing a column of the game board. Each object must have two properties:&nbsp;
            <code>colName</code> and <code>colItems</code>. <br></br>
            <code>colName</code> is a string representing the name of the column. Again, this should very preferrably be short (not over ~25 characters) as it may
            cause visual issues with the board.<br></br>
            <code>colItems</code> is an array of objects, each representing a question in the column. The structure of these question objects is the following:
            <ul>
              <li><code>score</code>: number, the value of the question (e.g. 100, 200, etc.)</li>
              <li><code>question</code>: string, the question to be displayed</li>
              <li><code>answer</code>: string, the answer to the question</li>
              <li><code>visited</code>: boolean, whether the question has been visited or not</li>
            </ul>

            A template JSON file can be found&nbsp;
            <a href="https://hogridr.github.io/webjeopardydocs/GameTemplate.json" target="_blank" rel="noopener noreferrer" style={{color: "#76a6df"}}>here</a>.
            <br></br><br></br>
            Your file should be hosted on something like&nbsp;<a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer" style={{color: "#76a6df"}}>Github Pages</a>,
            where it can be accessed through a URL. A valid Github Pages URL resembles the following:<br></br><code>https://[Github Username].github.io/[Repository Name]/[File name].json</code>.
          </p>
          <button className="green-popup-close-button" onClick={
            () => {
              document.getElementById("popup-json-documentation").style.visibility = "hidden";
            }
          }>Close</button>
        </div>
        
      </div>

      <div id="game-reset-popup">
        Game Reset!
        <button className="green-popup-close-button" onClick={
          () => {
            togglePopup("game-reset-popup", false);
          }
        }>Close</button>
      </div>

    </div>
  );
}

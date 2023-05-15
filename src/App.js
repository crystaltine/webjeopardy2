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
    alert("game reset!");
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

  function showImportMenu() {
    let popupBg = document.getElementById("popup-bg");
    let popupContent = document.getElementById("import-menu-popup");
    popupBg.style.visibility = "visible";
    popupContent.style.visibility = "visible";
    document.getElementById("url-input").value = "";
  }
  function closeImportMenu() {
    let popupBg = document.getElementById("popup-bg");
    let popupContent = document.getElementById("import-menu-popup");
    popupBg.style.visibility = "hidden";
    popupContent.style.visibility = "hidden";
    document.getElementById("import-error-text").style.visibility = "hidden";
  }

  function load(url) {
    const name = url.split("/").pop();

    fetch(url)
      .then(response => response.json())
      .then(data => {
          localStorage.setItem(name, JSON.stringify(data));
          closeImportMenu();
          onSelectGameData(name);
          document.getElementById("import-error-text").style.visibility = "hidden";
      })
      .catch(err => {
        console.log("Error while importing: " + err);
        document.getElementById("import-error-text").style.visibility = "visible";
      });
  }

  return (
    <div className="App">
      <SideBar onSelectGameData={onSelectGameData} currSelectedGame={gameName} openImportMenu={showImportMenu}/>
      <div className="main-container">
        <div className="App-header">
          Webjeopardy v. 1.0-rc1
          <button className="header-button">
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
            <span class='import-error-text' id="import-error-text">Unable to import game. Check console (Ctrl+Shift+J) for details.</span>
          </div>
          <button
            className="json-load-button"
            onClick={() => {
              load(document.getElementById("url-input").value);
            }}>
            Load
          </button>
          <button className="popup-close-button" onClick={closeImportMenu}>
            <img src="https://www.svgrepo.com/show/510922/close-sm.svg" className="popup-close-button-img" alt="Close Menu"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

import JeopardyGame from "./components/JeopardyGame";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import './styles/style1.css'

function App() {
  
  const [gameData, setGameData] = useState("");

  useEffect(() => {
    setGameData(localStorage.getItem('generic.json'));
  }, []);

  function onSelectGameData(gameName) {
    setGameData(localStorage.getItem(gameName));
  }

  return (
    <div className="main-container">
      <header className="App-header">
        berd
      </header>
      <JeopardyGame gameData={gameData}/>
      <SideBar onSelectGameData={onSelectGameData} />
    </div>
  );
}

export default App;

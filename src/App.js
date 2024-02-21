import React from 'react';
import logo from './logo.svg';
import './App.css';

function ShowHelp({showHelp, setShowHelp}) {
  return (
    <div style={{display: showHelp?"block":"none", position: "absolute", textAlign: "center", border: "3px black solid", backgroundColor: "#282c34"}}>
      <h3>How to play?</h3>
      <ol style={{textAlign: "left"}}>
        <li>Pick one square by RMB, your first click will be safe.</li>
        <li>The number represents count of mines surrounding (8 squares around).</li>
        <li>If you flag all of the mines touching a number, LMB on the number opens to the remaining squares.</li>
        <li>However, if you place the correct number of flags on the wrong squares, LMB will explode the mines.</li>
        <li>In order to win the game, you have to open all the safe squares. (Try not to die)</li>
        <li>Have fun!</li>
      </ol>
      <h3>Keybinds</h3>
      <ul style={{textAlign: "left"}}>
        <li>LMB(left click) <span>open square or open surrounding squares</span></li>
        <li>RMB(right click) <span>flag</span></li>
      </ul>
      <button onClick={()=>setShowHelp(false)} style={{fontSize: "inherit"}}>OK</button>
    </div>
  );
}

function App() {
  const [showHelp, setShowHelp] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This website has nothing except a game.
        </p>
        <a
          className="App-link"
          href="/minesweeper.html"
          rel="noopener noreferrer"
        >
          Play minesweeper
        </a>
        <button onClick={()=>setShowHelp(!showHelp)} style={{position: "absolute", bottom: "0px", left: "0px"}}>You don't know how to play?</button>
        <ShowHelp showHelp={showHelp} setShowHelp={setShowHelp} />
      </header>
    </div>
  );
}

export default App;

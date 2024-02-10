import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This website has nothing except game.
        </p>
        <a
          className="App-link"
          href="/minesweeper/"
          rel="noopener noreferrer"
        >
          Play minesweeper
        </a>
      </header>
    </div>
  );
}

export default App;

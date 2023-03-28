import React, { useEffect } from 'react';
import './App.scss';
import Board from "./components/Board/Board";

function App() {




  return (
    <div className="App">
      <div className="master-container">
        
        <div className="game-title">
          <h2>Tetris Clone</h2>
          <hr />
        </div>
        
        <div className="game-container">
          <Board />
        </div>

      </div>
    </div>
  );
}

export default App;

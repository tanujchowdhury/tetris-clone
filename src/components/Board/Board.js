import React, { useState } from "react";
import "./Board.scss";

const Board = () => {
  const [BoardCellState, setBoardCellState] = useState({
    0: "green",
    1: "green",
    2: "green",
  });

  const updateBoardState = (newState) => {
    setBoardCellState({...BoardCellState, ...newState});
  };

  return (
    <div className="board-container">
      <table>
        <button
          onClick={() => {
            updateBoardState({ 0: "red", 1: "yellow" });
          }}
        >
          Update the state
        </button>
        <tr>
          <td style={{ backgroundColor: BoardCellState[0] }}></td>
          <td style={{ backgroundColor: BoardCellState[1] }}></td>
          <td style={{ backgroundColor: BoardCellState[2] }}></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Board;

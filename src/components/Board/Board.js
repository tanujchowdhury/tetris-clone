import React, { useState } from "react";
import "./Board.scss";

const Board = () => {
  const [BoardCellState, setBoardCellState] = useState({
    0: "green",
    1: "green",
    2: "green",
  });

  const BOARD_HEIGHT = 20;
  const BOARD_WIDTH = 10;

  const updateBoardState = () => {
    setBoardCellState*
  }

  const createBoard = () => {
    const rows = [];
    for (let i = 0; i < BOARD_HEIGHT; i++) {}
    // for (i = 0; i < 200; i++) {
    //     if (i % 10 == 0) {
    //         cells.push(React.createElement(<tr>))
    //     };
    //     cells.push(<td></td>);
    //     if (i % 10 == 0) {
    //         cells.push(React.createElement(</tr>))
    //     }
    // };
  };

  return (
    <div className="board-container">
      <table>
        <tr>
          <td id="cell-1"></td>
          <td id="cell-2"></td>
          <td id="cell-3"></td>
          <td id="cell-4"></td>
          <td id="cell-5"></td>
        </tr>
        <tr>
          <td id="cell-6"></td>
          <td id="cell-7"></td>
          <td id="cell-8"></td>
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

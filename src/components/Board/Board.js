import React, { useState, useEffect } from "react";
import "./Board.scss";
import Cell from "../Cell/Cell";

const Board = () => {
  const [BoardCellState, setBoardCellState] = useState({});
  const [CurrentShape, setCurrentShape] = useState({ 4: "green", 5: "green", 14: "green", 15: "green" });

  // console.log(1)  

  const updateBoardState = (newState) => {
    setBoardCellState({ ...BoardCellState, ...newState });
  };

  const createBoard = (numberOfCells, cellColor) => {
    const cells = {};
    let i = 0;
    while (i < numberOfCells) {
      cells[i] = cellColor;
      i++;
    } 
    return updateBoardState(cells);
  }

  const renderShape = () => {

  }
  // console.log(CurrentShape)
  
  // current shape =  [4: "green", 5: "green", 14: "green", 15: "green"]
  const dropShape = () => {
    const updatedShape = {};
    for (let i in Object.keys(CurrentShape)) {
      // console.log(Object.keys(CurrentShape)[i])
      updatedShape[(Number(Object.keys(CurrentShape)[i]) + 10)] = "green";
    }
    setCurrentShape(updatedShape)
    updateBoardState(CurrentShape);
    console.log(updatedShape)
  }

  
  useEffect(() => {
    createBoard(200, "blue");   
  }, []);

  useEffect(() => {
    const myInterval = setInterval(dropShape, 1000);
    return () => {
      clearInterval(myInterval);
    }
  }, [dropShape]);

  

  return (
    <div>
      <button
        onClick={() => {
          updateBoardState({ ...BoardCellState, 0: "green", 1: "green", 10: "green", 11: "green" });
        }}
      >
        Update the state
      </button>
      <div className="board-container">
        {Object.keys(BoardCellState)?.map((cell_key) => {
          //every 10 cells make a new row
          ///row * 10 + cell
          //1 * 10 + 0 = 10
          //1 * 10 + 5 = 15
          //19 * 10 + 6 = 196
          return <Cell key={cell_key} data={BoardCellState[cell_key]} />;
        })}
      </div>
    </div>
  );
};

export default Board;

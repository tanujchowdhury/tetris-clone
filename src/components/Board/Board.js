import React, { useState, useEffect } from "react";
import "./Board.scss";
import Cell from "../Cell/Cell";

const Board = () => {
  const [BoardCellState, setBoardCellState] = useState({});
  const [Shape, setShape] = useState({
    4: "green",
    5: "green",
    14: "green",
    15: "green",
  });

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
  };

  const renderShape = (newShape) => {
    setShape(newShape);
  };

  const dropShape = () => {
    const updatedShape = {};
    for (let i in Object.keys(Shape)) {
      updatedShape[Number(Object.keys(Shape)[i]) + 10] = "green";
    }

    //turn the old shape blue
    const oldShape = {};
    for (let i in Object.keys(Shape)) {
      oldShape[Number(Object.keys(Shape)[i])] = "blue";
    }

    isCollidedShape();

    setShape(updatedShape);
    updateBoardState({ ...oldShape, ...updatedShape });
  };

  console.log(BoardCellState);

  const isCollidedShape = () => {
    //collisions occur if 1)shape reaches end of board 2) shape reaches merged shape
    const shapeIndices = Object.keys(Shape).map((shapeIndex) => {
      return Number(shapeIndex);
    });

    // const shapeLowestPoint = Math.max(...shapeIndices);
  };

  const mergeShape = () => {};

  useEffect(() => {
    createBoard(200, "blue");
  }, []);

  useEffect(() => {
    renderShape({ 4: "green", 5: "green", 14: "green", 15: "green" });
  }, []);

  useEffect(() => {
    const myInterval = setInterval(dropShape, 1500);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      <button
        onClick={() => {
          updateBoardState({
            ...BoardCellState,
            0: "green",
            1: "green",
            10: "green",
            11: "green",
          });
        }}
      >
        Update the state
      </button>
      <div className="board-container">
        {Object.keys(BoardCellState)?.map((cell_key) => {
          return <Cell key={cell_key} data={BoardCellState[cell_key]} />;
        })}
      </div>
    </div>
  );
};

export default Board;

import React, { useState, useEffect } from "react";
import "./Board.scss";
import Cell from "../Cell/Cell";

const Board = () => {
  const inflateBoardCells = (numberOfCells, cellColor) => {
    const cells = {};
    let i = 0;
    while (i < numberOfCells) {
      cells[i] = {
        cellIndex: i,
        cellColor: cellColor,
        isFilled: false,
      };
      i++;
    }
    return cells;
  };

  const boardCells = inflateBoardCells(200, "blue");

  const [BoardState, setBoardState] = useState({
    boardType: "simple",
    cells: boardCells,
    /*
      cellIndex: i,
      cellColor: cellColor,
      isFilled: false,
     */
  });

  const [Shape, setShape] = useState({
    shapeType: "O", //O, T, I, J, L ..
    shapeCells: [4, 5, 14, 15],
    shapeColor: "green",
    shapeOrientation: 0, //0, 90, 180, 270
  });

  const passShapeToBoard = (render) => {
    const cellColorMap = {};
    Shape.shapeCells.map((shapeCellIndex) => {
      cellColorMap[shapeCellIndex] = {
        cellIndex: shapeCellIndex,
        cellColor: render ? Shape.shapeColor : "blue",
        isFilled: false,
      };
    });
    setBoardState({
      ...BoardState,
      cells: { ...BoardState.cells, ...cellColorMap },
    });
  };

  const dropShape = () => {
    passShapeToBoard(false);
    if (hasShapeCollided()) return;
    const droppedCells = [];
    Shape.shapeCells.forEach((droppedCell) => {
      droppedCells.push(droppedCell + 10);
    });
    setShape({
      ...Shape,
      shapeCells: droppedCells,
    });
  };

  const hasShapeCollided = () => {
    if (Math.max(...Shape.shapeCells) + 10 > 199) {
      mergeShapeWithBoard();
      return true;
    };
    for (let cellIndex in Shape.shapeCells) {
      if (BoardState.cells[Shape.shapeCells[cellIndex] + 10].isFilled) {
        mergeShapeWithBoard();
        return true;
      };
    };
  };

  const mergeShapeWithBoard = () => {
    const cellsToMerge = {};
    Shape.shapeCells.forEach((cellIndex) => {
      cellsToMerge[cellIndex] = {
        cellIndex: cellIndex,
        cellColor: "yellow",
        isFilled: true,
      };
    });
    setBoardState({
      ...BoardState,
      cells: { ...BoardState.cells, ...cellsToMerge },
    });
    setShape({
      ...Shape,
      shapeCells: [4, 5, 14, 15],
    });
  };

  useEffect(() => {
    const myInterval = setInterval(dropShape, 100);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    passShapeToBoard(true);
  }, [Shape]);

  return (
    <>
      <div className="board-container">
        {Object.values(BoardState.cells).map((cell) => {
          return <Cell key={cell?.cellIndex} data={cell} />;
        })}
      </div>
    </>
  );
};

export default Board;

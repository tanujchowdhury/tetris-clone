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
    console.log('pass shape function')
    const cellColorMap = {};
    Shape.shapeCells.map((shapeCellIndex) => {
      return cellColorMap[shapeCellIndex] = {
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
    console.log('drop shape function')
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
    console.log('has shape collided function')
    if (Math.max(...Shape.shapeCells) + 10 > 199) {
      mergeShapeWithBoard();
      return true;
    }
    for (let cellIndex in Shape.shapeCells) {
      if (BoardState.cells[Shape.shapeCells[cellIndex] + 10].isFilled) {
        mergeShapeWithBoard();
        return true;
      }
    }
    return false;
  };

  const mergeShapeWithBoard = () => {
    console.log('merge shape with board function')
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

  const moveShapeLeft = () => {
    console.log('move shape left function')
    // passShapeToBoard(false);
    // if (hasShapeCollided()) return;
    const shiftedCells = [];
    Shape.shapeCells.forEach((shiftedCell) => {
      shiftedCells.push(shiftedCell - 1);
    });
    setShape({
      ...Shape,
      shapeCells: shiftedCells,
    });
  };

  console.log(Shape)

  const moveShapeRight = () => {};

  const moveShapeDown = () => {};

  const rotateShapeClockwise = () => {};

  const onKeyDownHandler = (key) => {
    // can add check for game state like started, going, ended, and remap keys accordingly
    switch (key.keyCode) {
      case 37:
        console.log("Left Arrow");
        moveShapeLeft();
        break;
      case 38:
        console.log("Up Arrow");
        rotateShapeClockwise();
        break;
      case 39:
        console.log("Right Arrow");
        moveShapeRight();
        break;
      case 40:
        console.log("Down Arrow");
        moveShapeDown();
        break;
      case 32:
        console.log("Spacebar");
        rotateShapeClockwise();
        break;
      default:
        console.log("Some key was pressed");
    }
  };

  useEffect(() => {
    const myInterval = setInterval(dropShape, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    console.log('Shape use effect - about to passShapeToBoard')
    passShapeToBoard(true);
  }, [Shape]);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDownHandler);
  }, []);

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

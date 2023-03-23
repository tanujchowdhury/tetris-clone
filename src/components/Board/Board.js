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
  });

  const [Shape, setShape] = useState({
    shapeType: "O", //O, T, I, J, L ..
    shapeCells: [4, 5, 14, 15],
    shapeColor: "green",
    shapeOrientation: 0, //0, 90, 180, 270
  });

  const passShapeToBoard = (render) => {
    // console.log(render ? "add shape to board" : "remove shape from board");
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

  const renderShape = (newShape) => {
    setShape(newShape);
  };

  const dropShape = () => {
    passShapeToBoard(false);
    const droppedCells = []
    Shape.shapeCells.forEach((droppedCell) => {
      droppedCells.push(droppedCell + 10)
    })
    console.log(droppedCells)
    setShape({
      ...Shape,
      shapeCells: droppedCells,
    })
    passShapeToBoard(true);

    // const updatedShape = {};
    // for (let i in Object.values(Shape)) {
    //   updatedShape[Object.values(Shape)[i].shapeKey + 10] = {
    //     ...Shape,
    //     shapeKey: Object.values(Shape)[i].shapeKey + 10,
    //     shapeColor: "green",
    //   };
    // }
    // //turn the old shape blue
    // const oldShape = {};
    // for (let i in Object.keys(Shape)) {
    //   oldShape[Number(Object.keys(Shape)[i])] = "blue";
    // }
    // isCollidedShape();
    // setShape(updatedShape);
    // // ...oldShape,
    // // updateBoardState({ ...updatedShape });
  };

  const isCollidedShape = () => {
    //collisions occur if 1)shape reaches end of board 2) shape reaches merged shape
    // const shapeIndices = Object.keys(Shape).map((shapeIndex) => {
    //   return Number(shapeIndex);
    // });
    // const shapeLowestPoint = Math.max(...shapeIndices);
  };

  const mergeShape = () => {};

  useEffect(() => {
    passShapeToBoard(true);
  }, []);

  // useEffect(() => {
  // renderShape();
  // updateBoardState(Shape);
  // }, []);

  useEffect(() => {
    const myInterval = setInterval(dropShape, 1500);
    return () => {
      clearInterval(myInterval);
    };
  });

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

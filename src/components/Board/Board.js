import React, { useState, useEffect } from "react";
import "./Board.scss";
import Cell from "../Cell/Cell";

const Board = () => {
  const [BoardState, setBoardState] = useState({
    boardType: "simple",
    cells: {},
  });

  console.log(BoardState)

  const [Shape, setShape] = useState({
    shapeType: "O", //O, T, I, J, L ..
    shapeCells: [4, 5, 14, 15],
    shapeColor: "green",
    shapeOrientation: 0, //0, 90, 180, 270
  });

  // const updateBoardState = (newBoardState) => {
  //   setBoardState({ ...BoardState, ...newBoardState });
  // };

  const passShapeToBoard = () => {
    console.log("passShapeToBoard")
    const cellColorMap = {}
    Shape.shapeCells.map((shapeCellIndex) => {
      cellColorMap[shapeCellIndex] = {
        cellIndex: shapeCellIndex,
        cellColor: Shape.shapeColor,
        isFilled: false,
      }
    })
   setBoardState({...BoardState, cells: {...BoardState.cells, ...cellColorMap} })

  }

  // move this function to app.js and pass in cells prop to board component
  const inflateBoardCells = (numberOfCells, cellColor) => {
    console.log("inflateBoardCells")
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
    return setBoardState({...BoardState, cells: cells})
    // return updateBoardState({
    //   cells: cells,
    // });
  };

  const renderShape = (newShape) => {
    setShape(newShape);
  };
  
  const dropShape = () => {

    
    // const updatedShape = {};
    // for (let i in Object.values(Shape)) {
    //   updatedShape[(Object.values(Shape)[i]).shapeKey + 10] = {
    //     ...Shape,
    //     shapeKey: Object.values(Shape)[i].shapeKey + 10,
    //     shapeColor: "green",
    //   }
    // }
    //turn the old shape blue
    // const oldShape = {};
    // for (let i in Object.keys(Shape)) {
    //   oldShape[Number(Object.keys(Shape)[i])] = "blue";
    // }
    // isCollidedShape();
    // setShape(updatedShape);
    //...oldShape,
    // updateBoardState({  ...updatedShape });
    
    
    // updateBoardState({}
    //   cellIndex: i,
    //   cellColor: cellColor,
    //   isFilled: false,)    
  };

  const isCollidedShape = () => {
    //collisions occur if 1)shape reaches end of board 2) shape reaches merged shape
    // const shapeIndices = Object.keys(Shape).map((shapeIndex) => {
    //   return Number(shapeIndex);
    // });

    // const shapeLowestPoint = Math.max(...shapeIndices);
  };

  const mergeShape = () => {};



  // useEffect(() => {
  //   inflateBoardCells(200, "blue");
  // }, []);

  // useEffect(() => {
  //   passShapeToBoard()
  //   // renderShape();
  //   // updateBoardState(Shape);
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
    <button onClick={() => inflateBoardCells(200, "blue")}>Inflate Board</button>
    <button onClick={passShapeToBoard}>Pass Shape to Board</button>
    </>
  );
};

export default Board;

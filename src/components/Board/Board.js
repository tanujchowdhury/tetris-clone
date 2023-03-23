import React, { useState, useEffect } from "react";
import "./Board.scss";
import Cell from "../Cell/Cell";

const Board = () => {
  const [BoardState, setBoardState] = useState({
    boardType: "simple",
    cells: [],
  });

  const [Shape, setShape] = useState({
    shapeType: "O", //O, T, I, J, L ..
    shapeCells: [4, 5, 14, 15],
    shapeColor: "green",
    shapeOrientation: 0, //0, 90, 180, 270
  });
  //   {
  //   4: {
  //     cellKey: 4,
  //     cellColor: "green",
  //   },
  //   5: {
  //     shapeKey: 5,
  //     shapeColor: "green",
  //   },
  //   14: {
  //     shapeKey: 14,
  //     shapeColor: "green",
  //   },
  //   15: {
  //     shapeKey: 15,
  //     shapeColor: "green",
  //   },
  // }

  const updateBoardState = (currentShape) => {
    const ColoredCells = currentShape["shapeCells"]?.map((currentCell) => {
      return {[currentCell]: currentShape.shapeColor};
    })
    
    console.log(ColoredCells)    
    setBoardState({ ...BoardState, ...ColoredCells });
  };

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
    // return updateBoardState(cells);
   
    return updateBoardState({
      cells: cells,
    });
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

  useEffect(() => {
    inflateBoardCells(200, "blue");
  }, []);

  useEffect(() => {
    // renderShape();
    updateBoardState(Shape);
  }, []);

  useEffect(() => {
    const myInterval = setInterval(dropShape, 1500);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="board-container">
      {BoardState.cells.forEach((cellIndex) => {
        return <Cell key={cellIndex} data={BoardState[cellIndex]} />;
      })}
    </div>
  );
};

export default Board;

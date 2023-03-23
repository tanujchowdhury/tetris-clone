import React from "react";
import "./Cell.scss";

const Cell = (props) => {
    return (
        <div className="cell-container" style={{backgroundColor: props?.data?.cellColor}}>
            {props.data.cellIndex}
            {props.data.isFilled ? "T" : "F"}
        </div>
    );
};

export default Cell;
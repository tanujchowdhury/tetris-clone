import React from "react";
import "./Cell.scss";

const Cell = (props) => {
    return (
        
        <div className="cell-container" style={{backgroundColor: props?.data?.cellColor}}>
        </div>
    );
};

export default Cell;
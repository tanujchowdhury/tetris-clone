import React from "react";
import "./Cell.scss";

const Cell = (props) => {
    return (
        <div className="cell-container" style={{backgroundColor: props?.data}}>
        </div>
    );
};

export default Cell;
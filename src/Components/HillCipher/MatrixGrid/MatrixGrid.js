import React, { useState } from "react";
import "./MatrixGrid.css";

const MatrixGrid = ({ setMat1, setMat2, setMat3, setMat4 }) => {
  return (
    <div className="Matrix">
      Enter Key Matrix :
      <div className="game-board2">
        <div className="box">
          <input
            className="inputmat"
            onChange={(e) => setMat1(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            className="inputmat"
            onChange={(e) => setMat2(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            className="inputmat"
            onChange={(e) => setMat3(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            className="inputmat"
            onChange={(e) => setMat4(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default MatrixGrid;

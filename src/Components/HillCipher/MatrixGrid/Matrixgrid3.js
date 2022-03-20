import React from "react";
import "./MatrixGrid3.css";

const Matrixgrid3 = ({
  setMat1,
  setMat2,
  setMat3,
  setMat4,
  setMat5,
  setMat6,
  setMat7,
  setMat8,
  setMat9,
}) => {
  return (
    <div className="Matrix">
      Enter Key Matrix :
      <div className="game-board">
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
        <div className="box">
          <input
            className="inputmat"
            onChange={(e) => setMat5(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            className="inputmat"
            onChange={(e) => setMat6(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            className="inputmat"
            onChange={(e) => setMat7(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            className="inputmat"
            onChange={(e) => setMat8(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            className="inputmat"
            onChange={(e) => setMat9(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Matrixgrid3;

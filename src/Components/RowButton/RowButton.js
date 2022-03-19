import React from "react";
import { useNavigate } from "react-router-dom";
import "./RowButton.css";

const RowButton = ({ name, routepath }) => {
  let navigate = useNavigate();
  const routeto = () => {
    navigate(`/${routepath}`);
  };
  return (
    <div className="RowButton">
      <div className="RowName">{name}</div>
      <div className="Rowtrybtn">
        <button className="glow-on-hover" onClick={routeto}>
          try it!
        </button>
      </div>
    </div>
  );
};

export default RowButton;

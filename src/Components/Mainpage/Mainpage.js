import React from "react";
import RowButton from "../RowButton/RowButton";
import "./Mainpage.css";

const Mainpage = () => {
  return (
    <div>
      <div className="MainpageHeader">Encryption and Decrytion Techniques</div>

      <div className="techcontainer">
        <div className="MainpageTechniquecontainer">
          <div className="TechHeading">Subustution Techniques</div>
          <div className="subtech">
            <RowButton name={"Caesar Cipher"} routepath={"Ceasercipher"} />
            <RowButton name={"Monoalphabetic Cipher"} />
            <RowButton name={"Playfair Cipher"} routepath={"playfair"} />
            <RowButton name={"Hill Cipher"} routepath={"HillCipher"} />
            <RowButton name={"Polyalphabetic Cipher"} />
          </div>
          <div className="TechHeading">Transposition Techniques</div>
          <RowButton name={"Rail Fence Technique"} routepath={"railfence"} />
          <RowButton name={"Columnar Method"} routepath={"columnar"} />
          <div className="transtech"></div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;

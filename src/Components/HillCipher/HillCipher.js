import React, { useState } from "react";
import "./HillCipher.css";
import MatrixGrid from "./MatrixGrid/MatrixGrid";
import MatrixGrid3 from "./MatrixGrid/Matrixgrid3";
const HillCipher = () => {
  const [Plaintext, setPlaintext] = useState("");
  const [Value, setValue] = useState(null);
  const [Ans, setAns] = useState("");
  const [mat1, setMat1] = useState(null);
  const [mat2, setMat2] = useState(null);
  const [mat3, setMat3] = useState(null);
  const [mat4, setMat4] = useState(null);
  const [mat5, setMat5] = useState(null);
  const [mat6, setMat6] = useState(null);
  const [mat7, setMat7] = useState(null);
  const [mat8, setMat8] = useState(null);
  const [mat9, setMat9] = useState(null);

  var matrix = [];
  const addValue = (Value) => {
    matrix = [...matrix, Value];
    console.log(matrix);
  };

  function mod(n, m) {
    return ((n % m) + m) % m;
  }
  function multiply(a, b) {
    var aNumRows = a.length,
      aNumCols = a[0].length,
      bNumRows = b.length,
      bNumCols = b[0].length,
      m = new Array(aNumRows); // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0; // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
          m[r][c] = mod(m[r][c], 26);
        }
      }
    }
    return m;
  }

  const matrixtoalpha = (m) => {
    var str = "";

    for (var f = 0; f < m.length; f++) {
      str += String.fromCharCode(m[f][0] + 65);
    }
    return str;
  };

  //Encryption algorithm
  const HillEncrypt = (text, mat) => {
    console.log(text, mat);
    var n = text.length / mat;
    //from user
    console.log(Value, matrix);
    var a = new Array(Value);
    for (var i = 0; i < Value; i++) {
      a[i] = new Array(Value);
    }

    var x = 0;
    if (Value == 2) {
      a[0][0] = mat1;
      a[0][1] = mat2;
      a[1][0] = mat3;
      a[1][1] = mat4;
    }
    if (Value == 3) {
      a[0][0] = mat1;
      a[0][1] = mat2;
      a[0][2] = mat3;
      a[1][0] = mat4;
      a[1][1] = mat5;
      a[1][2] = mat6;
      a[2][0] = mat7;
      a[2][1] = mat8;
      a[2][2] = mat9;
    }
    console.log(a);

    var b = new Array(mat);
    for (var i = 0; i < mat; i++) {
      b[i] = new Array(1);
    }
    var c = 0;
    var dcstr = "";
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < mat; j++) {
        b[j][0] = text.charCodeAt(c) - 65;
        c = c + 1;
      }
      var ans = multiply(a, b);
      //   console.log(b);
      dcstr += matrixtoalpha(ans);
    }
    console.log(dcstr);
    setAns(dcstr);
  };
  //Decryption algorithm
  const HillDecrypt = (text, mat) => {
    console.log("decryption");
  };
  //handling submit
  const submitForm = (e) => {
    e.preventDefault();
    var text = Plaintext.toUpperCase();
    text = text.split(" ").join("");
    var mat = Value;
    // console.log(text, mat);

    if (e.target.value == "Encrypt") {
      HillEncrypt(text, mat);
    }
    if (e.target.value == "Decrypt") {
      HillDecrypt(text, mat);
    }
  };

  return (
    <div>
      <div className="MainpageHeader">Hill Cipher</div>
      <div className="techcontainer">
        <div className="MainpageTechniquecontainer">
          <form>
            Plaintext :
            <input
              type="text"
              className="inputText"
              placeholder="Enter here"
              value={Plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
            />
            <br />
            <div className="RadioButtons">
              <label>Key :</label>
              <input
                type="radio"
                name="rails"
                className="radioBtn"
                value="2"
                onClick={(e) => setValue(2)}
              />
              <label>2x2 Matrix</label>
              <input
                type="radio"
                name="rails"
                className="radioBtn"
                value="3"
                onClick={(e) => setValue(3)}
              />
              <label>3x3 Matrix</label>
            </div>
            <br />
            {Value == 2 ? (
              <MatrixGrid
                setMat1={setMat1}
                setMat2={setMat2}
                setMat3={setMat3}
                setMat4={setMat4}
              />
            ) : null}
            {Value == 3 ? (
              <MatrixGrid3
                setMat1={setMat1}
                setMat2={setMat2}
                setMat3={setMat3}
                setMat4={setMat4}
                setMat5={setMat5}
                setMat6={setMat6}
                setMat7={setMat7}
                setMat8={setMat8}
                setMat9={setMat9}
              />
            ) : null}
            <br />
            <input
              type="submit"
              value="Encrypt"
              className="btnencrypt"
              onClick={submitForm}
            />
            <input
              type="submit"
              value="Decrypt"
              className="btndecrypt"
              onClick={submitForm}
            />
          </form>
          <br />
          <div className="RailAns">
            <div className="RailAns">Cipher Text :</div>
            <div className="RailsDecrpyted">{Ans}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HillCipher;

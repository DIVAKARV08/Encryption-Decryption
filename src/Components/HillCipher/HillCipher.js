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
  const HillEncrypt = (text, mat, a) => {
    console.log(text, mat);
    var n = text.length / mat;
    //from user
    console.log(Value, matrix);

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

  //cofactor
  function getCofactor(A, temp, p, q, n) {
    let i = 0,
      j = 0;

    // Looping for each element of the matrix
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        // Copying into temporary matrix only those element
        // which are not in given row and column
        if (row != p && col != q) {
          temp[i][j++] = A[row][col];

          // Row is filled, so increase row index and
          // reset col index
          if (j == n - 1) {
            j = 0;
            i++;
          }
        }
      }
    }
  }
  //determanent
  function determinant(A, n) {
    var N = 3;
    let D = 0; // Initialize result

    // Base case : if matrix contains single element
    if (n == 1) return A[0][0];

    let temp = new Array(N); // To store cofactors
    for (let i = 0; i < N; i++) {
      temp[i] = new Array(N);
    }

    let sign = 1; // To store sign multiplier

    // Iterate for each element of first row
    for (let f = 0; f < n; f++) {
      // Getting Cofactor of A[0][f]
      getCofactor(A, temp, 0, f, n);
      D += sign * A[0][f] * determinant(temp, n - 1);

      // terms are to be added with alternate sign
      sign = -sign;
    }

    return D;
  }
  //adjoint
  function adjoint(A, adj) {
    var N = 3;
    // temp is used to store cofactors of A[][]
    let sign = 1;
    let temp = new Array(N);
    for (let i = 0; i < N; i++) {
      temp[i] = new Array(N);
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        // Get cofactor of A[i][j]
        getCofactor(A, temp, i, j, N);

        // sign of adj[j][i] positive if sum of row
        // and column indexes is even.
        sign = (i + j) % 2 == 0 ? 1 : -1;

        // Interchanging rows and columns to get the
        // transpose of the cofactor matrix
        adj[j][i] = sign * determinant(temp, N - 1);
      }
    }
  }

  //Decryption algorithm
  const HillDecrypt = (text, mat, a) => {
    var n = text.length / mat;

    if (Value == 2) {
      var ainv = a[0][0] * a[1][1] - a[0][1] * a[1][0];
      ainv = Math.sqrt(ainv);
      //   console.log(ainv);
      var temp = ainv * a[1][1];
      a[1][1] = mod(ainv * a[0][0], 26);
      a[0][0] = mod(temp, 26);
      a[0][1] = mod(a[0][1] * ainv * -1, 26);
      a[1][0] = mod(a[1][0] * ainv * -1, 26);
    }
    if (Value == 3) {
      var N = 3;
      let adj = new Array(N);
      for (let i = 0; i < N; i++) {
        adj[i] = new Array(N);
      }

      var inverse =
        a[0][0] * (a[1][1] * a[2][2] - a[1][2] * a[2][1]) -
        a[0][1] * (a[2][2] * a[1][0] - a[1][2] * a[2][0]) +
        a[0][2] * (a[2][1] * a[1][0] - a[1][1] * a[2][0]);
      inverse = Math.sqrt(inverse);
      console.log(inverse);

      var ainv = adjoint(a, adj);
      console.log(adj);
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          a[i][j] = inverse * adj[i][j];
        }
      }
    }

    console.log(a);
    var b = new Array(mat);
    for (var i = 0; i < mat; i++) {
      b[i] = new Array(1);
    }
    var c = 0;
    var dcstr = "";
    for (var x = 0; x < n; x++) {
      for (var y = 0; y < mat; y++) {
        b[y][0] = text.charCodeAt(c) - 65;
        c = c + 1;
      }
      var ans = multiply(a, b);
      //   console.log(b);
      dcstr += matrixtoalpha(ans);
    }
    console.log(dcstr);
    setAns(dcstr);
  };

  //handling submit
  const submitForm = (e) => {
    e.preventDefault();
    var text = Plaintext.toUpperCase();
    text = text.split(" ").join("");
    var mat = Value;
    // console.log(text, mat);
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
    if (e.target.value == "Encrypt") {
      HillEncrypt(text, mat, a);
    }
    if (e.target.value == "Decrypt") {
      HillDecrypt(text, mat, a);
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

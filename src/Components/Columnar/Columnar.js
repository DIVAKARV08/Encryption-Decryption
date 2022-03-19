import React, { useState } from "react";
import "./Columnar.css";

const Columnar = () => {
  const [Plaintext, setPlaintext] = useState("");
  const [Key, setKey] = useState("");
  const [Ans, setAns] = useState("");
  const [No, setNo] = useState("");

  const ColumnarEncrypt = (textp, keynew) => {
    var text = textp.split(" ").join("");
    console.log(text, keynew);
    var n = text.length % keynew.length;
    console.log(n);
    if (n !== 0) {
      for (let i = n; i < keynew.length; i++) {
        text += "*";
      }
      n = n + 1;
    }
    n = text.length / keynew.length;
    console.log(text, n);

    var x = new Array(keynew.length);
    for (var i = 0; i < n + 1; i++) {
      x[i] = new Array(keynew.length);
    }
    for (var i = 0; i < keynew.length; i++) {
      x[0][i] = keynew.charAt(i);
    }

    var k = 0;
    for (i = 1; i < n + 1; i++) {
      for (var j = 0; j < keynew.length; j++) {
        x[i][j] = text.charAt(k);
        k++;
      }
    }
    console.log(x);

    const calculate = (x, j) => {
      var a = "";
      for (i = 1; i < n + 1; i++) {
        a += x[i][j];
      }
      console.log(a);
      return a;
    };

    const Decrypt = (x) => {
      var ans = "";
      k = 1;
      for (let m = 0; m < keynew.length; m++) {
        for (j = 0; j < keynew.length; j++) {
          if (x[0][j] == k) {
            ans += calculate(x, j);
            k = k + 1;
          }
        }
      }
      return ans;
    };
    var ans = Decrypt(x);
    console.log(ans);
    return ans;
  };

  //Decryption algorithm
  const readCol = (x, c, r, text, ind) => {
    var a = "";
    for (var i = 1; i < r + 1; i++) {
      x[i][c] = text.charAt(ind);
      ind = ind + 1;
    }
  };
  const ColumnarDecrypt = (textp, keynew) => {
    var text = textp.split(" ").join("");
    console.log(text, keynew);
    var r = text.length / keynew.length;
    var c = keynew.length;
    console.log(r);

    var x = new Array(c);
    for (var i = 0; i < r + 1; i++) {
      x[i] = new Array(c);
    }

    for (var i = 0; i < c; i++) {
      x[0][i] = keynew.charAt(i);
    }

    var k = 1;
    var i = 0;
    var ans = "";
    for (var m = 0; m < c; m++) {
      for (var j = 0; j < c; j++) {
        if (x[0][j] == k) {
          readCol(x, j, r, text, i);
          i = i + r;
          k = k + 1;
        }
      }
    }
    console.log(x);
    var ans = "";
    for (var ri = 1; ri < r + 1; ri++) {
      for (var ci = 0; ci < c; ci++) {
        ans += x[ri][ci];
      }
    }
    console.log(ans);
    setAns(ans);
    return ans;
  };

  const setCharAt = (str, index, chr) => {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  };

  const textKey = (keynew) => {
    keynew = keynew.toLowerCase();
    console.log("not number ", keynew);
    var k = 1;
    var ch = "a";
    for (let i = 0; i < 26; i++) {
      ch = String.fromCharCode(97 + i);
      for (let j = 0; j < keynew.length; j++) {
        if (keynew.charAt(j) === ch) {
          keynew = setCharAt(keynew, j, k);
          k = k + 1;
        }
      }
    }
    return keynew;
  };

  const submitForm = (e) => {
    e.preventDefault();

    var textp = Plaintext;
    var keynew = Key;
    console.log(parseInt(keynew));
    console.log(keynew);
    if (!(parseInt(keynew) == keynew)) {
      keynew = textKey(keynew);
      console.log(keynew);
    }

    if (!Number.isInteger(keynew)) {
      keynew.toLowerCase();
      console.log("not number");
      var k = 1;
      var c = "a";
    }

    if (e.target.value == "Encrypt") {
      for (var i = 0; i < No; i++) {
        var textp = ColumnarEncrypt(textp, keynew);
      }
    }

    if (e.target.value == "Decrypt") {
      for (var i = 0; i < No; i++) {
        var textp = ColumnarDecrypt(textp, keynew);
      }
    }
    setAns(textp);
  };
  return (
    <div>
      <div className="MainpageHeader">Columnar Method</div>
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
              Key:
              <input
                type="text"
                className="inputText"
                placeholder="Enter here"
                value={Key}
                onChange={(e) => setKey(e.target.value)}
              />
              <br />
              <div className="RadioButtons">
                No of Stages :
                <input
                  type="number"
                  className="inputText"
                  placeholder="Enter here"
                  value={No}
                  onChange={(e) => setNo(e.target.value)}
                />
                <br />
              </div>
            </div>
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

export default Columnar;

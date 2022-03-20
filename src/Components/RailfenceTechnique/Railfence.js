import React, { useState } from "react";
import "./Railfence.css";

const Railfence = () => {
  const [Plaintext, setPlaintext] = useState("");
  const [Value, setValue] = useState();
  const [Ans, setAns] = useState("");

  const RailfenceEncrypt = (text, rails) => {
    let n = text.length;
    var x = new Array(rails);

    for (var i = 0; i < rails; i++) {
      x[i] = new Array(n);
    }
    if (rails === 2) {
      for (i = 0; i < n; i++) {
        if ((i + 1) % 2 === 0) {
          x[1][i] = text.charAt(i);
          x[0][i] = "";
        } else {
          x[1][i] = "";
          x[0][i] = text.charAt(i);
        }
      }
    }
    console.log(x);

    var ans = "";
    for (i = 0; i < rails; i++) {
      for (var j = 0; j < n; j++) {
        ans += x[i][j];
      }
    }

    if (rails === 3) {
      for (i = 0; i < n; i++) {
        if ((i + 1) % 2 === 0) {
          x[0][i] = "";
          x[1][i] = text.charAt(i);
          x[2][i] = "";
        } else if ((i + 1) % 4 === 1) {
          x[0][i] = text.charAt(i);
          x[1][i] = "";
          x[2][i] = "";
        } else {
          x[0][i] = "";
          x[1][i] = "";
          x[2][i] = text.charAt(i);
        }
      }
    }
    console.log(x);

    var ans = "";
    for (i = 0; i < rails; i++) {
      for (var j = 0; j < n; j++) {
        ans += x[i][j];
      }
    }

    setAns(ans);
    console.log(ans);
  };

  const RailfenceDecrypt = (text, rails) => {
    let n = text.length;
    var x = new Array(rails);

    for (var i = 0; i < rails; i++) {
      x[i] = new Array(n);
    }

    var p = 0;
    //for rails 2
    if (rails === 2) {
      for (i = 0; i < n; i++) {
        if (i % 2 === 0) {
          x[0][i] = text.charAt(p);
          x[1][i] = "";
          p = p + 1;
        }
      }
      for (i = 0; i < n; i++) {
        if (i % 2 != 0) {
          x[0][i] = "";
          x[1][i] = text.charAt(p);
          p = p + 1;
        }
      }

      var ans = "";
      for (var j = 0; j < n; j++) {
        if (j % 2 == 0) ans += x[0][j];
        else ans += x[1][j];
      }
    }

    console.log(x);
    //for rails 3
    var ans = "";
    var ps = 0;
    if (rails === 3) {
      for (let j = 0; j < n; j++) {
        x[0][j] = "";
        x[1][j] = "";
        x[2][j] = "";
      }

      for (i = 0; i < n; i += 4) {
        x[0][i] = text.charAt(ps);
        ps++;
      }
      for (i = 1; i < n; i += 2) {
        x[1][i] = text.charAt(ps);
        ps++;
      }
      for (i = 2; i < n; i += 4) {
        x[2][i] = text.charAt(ps);
        ps++;
      }

      for (i = 0; i < n; i++) {
        ans += x[0][i] + x[1][i] + x[2][i];
      }
    }

    console.log(ans);
    setAns(ans);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(Plaintext);
    console.log(Value);
    var text = Plaintext.split(" ").join("");
    if (e.target.value == "Encrypt") {
      RailfenceEncrypt(text, Value);
    }
    if (e.target.value == "Decrypt") {
      RailfenceDecrypt(text, Value);
    }
  };
  return (
    <div>
      <div className="MainpageHeader">Rail Fence Techniques</div>
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
              <label>Rails :</label>
              <input
                type="radio"
                name="rails"
                className="radioBtn"
                value="2"
                onClick={(e) => setValue(2)}
              />
              <label>Rails 2</label>
              <input
                type="radio"
                name="rails"
                className="radioBtn"
                value="3"
                onClick={(e) => setValue(3)}
              />
              <label>Rails 3</label>
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

export default Railfence;

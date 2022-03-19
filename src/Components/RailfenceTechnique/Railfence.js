import React, { useState } from "react";
import "./Railfence.css";

const Railfence = () => {
  const [Plaintext, setPlaintext] = useState("");
  const [Value, setValue] = useState();
  const [Ans, setAns] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    console.log(Plaintext);
    console.log(Value);
    let n = Plaintext.length;
    var x = new Array(Value);

    for (var i = 0; i < Value; i++) {
      x[i] = new Array(n);
    }
    if (Value === 2) {
      for (i = 0; i < n; i++) {
        if ((i + 1) % 2 === 0) {
          x[1][i] = Plaintext.charAt(i);
          x[0][i] = "";
        } else {
          x[1][i] = "";
          x[0][i] = Plaintext.charAt(i);
        }
      }
    }
    console.log(x);

    var ans = "";
    for (i = 0; i < Value; i++) {
      for (var j = 0; j < n; j++) {
        ans += x[i][j];
      }
    }

    if (Value === 3) {
      for (i = 0; i < n; i++) {
        if ((i + 1) % 2 === 0) {
          x[0][i] = "";
          x[1][i] = Plaintext.charAt(i);
          x[2][i] = "";
        } else if ((i + 1) % 4 === 1) {
          x[0][i] = Plaintext.charAt(i);
          x[1][i] = "";
          x[2][i] = "";
        } else {
          x[0][i] = "";
          x[1][i] = "";
          x[2][i] = Plaintext.charAt(i);
        }
      }
    }
    console.log(x);

    var ans = "";
    for (i = 0; i < Value; i++) {
      for (var j = 0; j < n; j++) {
        ans += x[i][j];
      }
    }

    setAns(ans);
    console.log(ans);
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

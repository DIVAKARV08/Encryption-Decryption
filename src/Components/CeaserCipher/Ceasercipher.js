import React, { useState } from "react";
import "./Ceasercipher.css";

const Ceasercipher = () => {
  const [Plaintext, setPlaintext] = useState("");
  const [Key, setKey] = useState("");
  const [Ans, setAns] = useState("");

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  //Encryption
  const CeaserEncryption = (textp, keynew) => {
    var ans = "";
    for (var c = 0; c < textp.length; c++) {
      var a = textp.charCodeAt(c) - 65;
      var a = mod(a + keynew, 26);
      ans += String.fromCharCode(a + 65);
    }
    console.log(ans);
    setAns(ans);
  };

  const CeaserDecryption = (textp, keynew) => {
    var ans = "";
    for (var c = 0; c < textp.length; c++) {
      var a = textp.charCodeAt(c) - 65;
      var a = mod(a - keynew, 26);
      ans += String.fromCharCode(a + 65);
    }
    console.log(ans);
    setAns(ans);
  };

  const submitForm = (e) => {
    e.preventDefault();

    var textp = Plaintext.split(" ").join("");
    textp = textp.toUpperCase();
    var keynew = parseInt(Key);
    console.log(textp, keynew);
    if (e.target.value == "Encrypt") {
      CeaserEncryption(textp, keynew);
    }
    if (e.target.value == "Decrypt") {
      CeaserDecryption(textp, keynew);
    }
  };
  return (
    <div>
      <div className="MainpageHeader">Ceaser cipher</div>
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
              Key :
              <input
                type="number"
                className="inputText"
                placeholder="Enter here"
                value={Key}
                onChange={(e) => setKey(e.target.value)}
              />
              <br />
            </div>
            <br />
            <input
              type="submit"
              value="Encrypt"
              className="btnencrypt"
              onClick={(e) => submitForm(e)}
            />
            <input
              type="submit"
              value="Decrypt"
              className="btndecrypt"
              onClick={(e) => submitForm(e)}
            />
          </form>
          <br />
          <div className="RailAns">
            <div className="RailAns">Ciphertext :</div>
            <div className="RailsDecrpyted">{Ans}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceasercipher;

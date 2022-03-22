import React, { useState } from "react";
import "./PolyalphabeticCipher.css";

const Polyalphabeticcipher = () => {
  const [Plaintext, setPlaintext] = useState("");
  const [Key, setKey] = useState("");
  const [Ans, setAns] = useState("");

  const alphabeticTable = (a) => {
    for (var i = 0; i < 26; i++) {
      a[0][i] = i;
    }

    for (var i = 1; i < 26; i++) {
      for (var j = 0; j < 26; j++) {
        a[i][j] = (a[i - 1][j] + 1) % 26;
      }
    }
  };

  //Polyalpahbetic encryption
  const PolyalpahbeticEncryption = (a, textp, keynew) => {
    var ans = "";
    for (var i = 0; i < textp.length; i++) {
      var ap = textp.charCodeAt(i) - 65;
      var ak = keynew.charCodeAt(i) - 65;

      var c = String.fromCharCode(a[ak][ap] + 65);
      ans += c;
    }
    setAns(ans);
  };
  //Polyalpahbetic decryption
  const PolyalpahbeticDecryption = (a, textp, keynew) => {
    var ans = "";
    for (var i = 0; i < textp.length; i++) {
      var ak = keynew.charCodeAt(i) - 65;
      var ap = textp.charCodeAt(i) - 65;
      var c = ap - ak;
      if (c < 0) {
        c = c + 26;
      }
      c = String.fromCharCode(c + 65);
      ans += c;
    }
    setAns(ans);
  };
  const submitForm = (e) => {
    e.preventDefault();

    var textp = Plaintext.split(" ").join("");
    textp = textp.toUpperCase();
    var keynew = Key.split(" ").join("");
    keynew = keynew.toUpperCase();
    console.log(textp, keynew);
    var a = new Array(26);
    for (var i = 0; i < 26; i++) {
      a[i] = new Array(26);
    }
    alphabeticTable(a);
    // console.log(a);

    if (e.target.value == "Encrypt") {
      PolyalpahbeticEncryption(a, textp, keynew);
    }
    if (e.target.value == "Decrypt") {
      PolyalpahbeticDecryption(a, textp, keynew);
    }
  };
  return (
    <div>
      <div className="MainpageHeader">Polyalphabetic Cipher</div>
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
                type="text"
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

export default Polyalphabeticcipher;

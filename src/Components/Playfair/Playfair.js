import React, { useState } from "react";
import "./Playfair.css";
const Playfair = () => {
  const [Plaintext, setPlaintext] = useState("");
  const [Key, setKey] = useState("");
  const [Ans, setAns] = useState("");

  const filler = (textp) => {
    var a = "";
    var k = 0;
    for (var i = 0; i < textp.length; i++) {
      if (textp.charAt(k) == textp.charAt(k + 1)) {
        a += textp.charAt(k);
        a += "X";
        k = k + 1;
        if (!(k < textp.length)) break;
      } else {
        if (k + 1 < textp.length) {
          a = a + textp.charAt(k) + textp.charAt(k + 1);
          k = k + 2;
        }

        if (!(k < textp.length)) break;
      }
    }
    return a;
  };

  //finding indices
  const findPosition = (a, ch) => {
    for (var r = 0; r < 5; r++) {
      for (var c = 0; c < 5; c++) {
        if (a[r][c] == ch) {
          return [r, c];
        }
      }
    }
  };
  //playfair Encryption Algorithm
  const playfairEncryption = (a, textp) => {
    var filledtext = filler(textp);
    console.log(filledtext);
    var ans = "";
    for (var p = 0; p < filledtext.length; p = p + 2) {
      var ch1 = filledtext.charAt(p);
      var ch2 = filledtext.charAt(p + 1);
      ch1 = findPosition(a, ch1);
      var r1 = ch1[0];
      var c1 = ch1[1];
      var let2 = findPosition(a, ch2);
      var r2 = let2[0];
      var c2 = let2[1];
      //lies in same row means replace by  next letter(right)
      if (r1 == r2) {
        ans += a[r1][(c1 + 1) % 5];
        ans += a[r2][(c2 + 1) % 5];
      }
      //if lies in same column means replace by  letter beneath(down)
      else if (c1 == c2) {
        ans += a[(r1 + 1) % 5][c1];
        ans += a[(r2 + 1) % 5][c2];
      }
      //if none of the above case occurs then the letter lies in different row and column
      else {
        // if (r1 < r2) {
        ans += a[r1][c2];
        ans += a[r2][c1];
        // } else {
        //   ans += a[r2][c1];
        //   ans += a[r1][c2];
        // }
      }
    }
    console.log(ans);
    setAns(ans);
  };
  //playfair Decryption Algorithm
  const playfairDecryption = (a, textp) => {
    var ans = "";
    for (var p = 0; p < textp.length; p = p + 2) {
      var ch1 = textp.charAt(p);
      var ch2 = textp.charAt(p + 1);
      ch1 = findPosition(a, ch1);
      var r1 = ch1[0];
      var c1 = ch1[1];
      var let2 = findPosition(a, ch2);
      var r2 = let2[0];
      var c2 = let2[1];
      //lies in same row means replace by  next letter(right)
      if (r1 == r2) {
        c1 = c1 - 1;
        c2 = c2 - 1;
        if (c1 <= 0) c1 = 4;
        if (c2 <= 0) c2 = 4;
        ans += a[r1][c1];
        ans += a[r2][c2];
      }
      //if lies in same column means replace by  letter beneath(down)
      else if (c1 == c2) {
        r1 = r1 - 1;
        r2 = r2 - 1;
        if (r1 < 0) r1 = 4;
        if (r2 < 0) r2 = 4;
        ans += a[r1][c1];
        ans += a[r2][c2];
      }
      //if none of the above case occurs then the letter lies in different row and column
      else {
        // if (r1 < r2) {
        ans += a[r1][c2];
        ans += a[r2][c1];
        // } else {
        //   ans += a[r2][c1];
        //   ans += a[r1][c2];
        // }
      }
    }
    console.log(ans);
    var newans = "";
    for (var i = 0; i < ans.length; i++) {
      if (ans.charAt(i) != "X") {
        newans += ans.charAt(i);
      }
    }
    setAns(newans);
  };

  const checkAndInsert = (a, val) => {
    var present = false;
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        if (a[i][j] == val) {
          present = true;
        }
      }
    }
    if (present == false) {
      for (var r = 0; r < 5; r++) {
        for (var c = 0; c < 5; c++) {
          if (a[r][c] == undefined) {
            a[r][c] = val;
            present = true;
            break;
          }
        }
        if (present == true) break;
      }
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    var textp = Plaintext.split(" ").join("");
    textp = textp.toUpperCase();
    textp = textp.replace(/J/g, "I");
    var keynew = Key.split(" ").join("");
    keynew = keynew.toUpperCase();
    keynew = keynew.replace(/J/g, "I");
    console.log(textp, keynew);
    var a = new Array(5);
    for (var i = 0; i < 5; i++) {
      a[i] = new Array(5);
    }

    for (var j = 0; j < keynew.length; j++) {
      var c = keynew.charAt(j);
      checkAndInsert(a, c);
    }
    for (var i = 0; i < 26; i++) {
      if (i + 65 == 74) continue;
      var c = String.fromCharCode(65 + i);
      checkAndInsert(a, c);
    }
    console.log(a);

    if (e.target.value == "Encrypt") {
      playfairEncryption(a, textp);
    }
    if (e.target.value == "Decrypt") {
      playfairDecryption(a, textp);
    }
  };
  return (
    <div>
      <div className="MainpageHeader">Playfair Cipher</div>
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

export default Playfair;

import "./App.css";
import Mainpage from "./Components/Mainpage/Mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Railfence from "./Components/RailfenceTechnique/Railfence";
import Columnar from "./Components/Columnar/Columnar";
import HillCipher from "./Components/HillCipher/HillCipher";
import Ceasercipher from "./Components/CeaserCipher/Ceasercipher";
import Playfair from "./Components/Playfair/Playfair";
import Polyalphabeticcipher from "./Components/PolyalphabeticCipher/Polyalphabeticcipher";
import MonoalphabeticCipher from "./Components/MonoalphabeticCipher/MonoalphabeticCipher";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}`} element={<Mainpage />} />
          <Route path="/railfence" element={<Railfence />} />
          <Route path="/columnar" element={<Columnar />} />
          <Route path="/HillCipher" element={<HillCipher />} />
          <Route path="/Ceasercipher" element={<Ceasercipher />} />
          <Route path="/playfair" element={<Playfair />} />
          <Route path="/polyalaphabetic" element={<Polyalphabeticcipher />} />
          <Route path="/monoalphabetic" element={<MonoalphabeticCipher />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

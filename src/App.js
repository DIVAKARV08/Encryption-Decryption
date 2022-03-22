import "./App.css";
import Mainpage from "./Components/Mainpage/Mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Railfence from "./Components/RailfenceTechnique/Railfence";
import Columnar from "./Components/Columnar/Columnar";
import HillCipher from "./Components/HillCipher/HillCipher";
import Ceasercipher from "./Components/CeaserCipher/Ceasercipher";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import Mainpage from "./Components/Mainpage/Mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Railfence from "./Components/RailfenceTechnique/Railfence";
import Columnar from "./Components/Columnar/Columnar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Mainpage />} />
          <Route exact path="/railfence" element={<Railfence />} />
          <Route exact path="/columnar" element={<Columnar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

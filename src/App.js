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
          <Route path="/" element={<Mainpage />} />
          <Route path="/railfence" element={<Railfence />} />
          <Route path="/columnar" element={<Columnar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

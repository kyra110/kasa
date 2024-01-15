/* eslint-disable no-unused-vars */
import About from "../pages/About";
import Home from "../pages/Home";
import Error from "../pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<About />} />
        <Route path="/error" element={<Error/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

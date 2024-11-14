import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Read from "./Components/Read";
import Create from "./Components/Create";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read />} />
        </Routes>
        <Routes>
          <Route path="/create" element={<Create/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App; 
import React, { useContext } from "react";
import Navbars from "./Navbar/navbar";
import "../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import SingleProduct from "./SingleProduct/SingleProduct";
import Cart from "./Cart/Cart";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
        </Routes>
        <Routes>
          <Route path="/addtocart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App; 
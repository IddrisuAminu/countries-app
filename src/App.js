import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/product" element={<ProductScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

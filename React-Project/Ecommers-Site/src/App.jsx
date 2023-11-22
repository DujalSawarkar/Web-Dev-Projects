import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="" element={<></>}></Route>
        <Route path="" element={<></>}></Route>
        <Route path="" element={<></>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

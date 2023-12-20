import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Cart from "./Components/Pages/Cart.jsx";
import Login from "./Components/Pages/Login.jsx";
function App() {
  const FooterData = [
    {
      id: "1",
      title: "COMPANY",
      about: "about",
      feature: "feature",
      work: "work",
      career: "career",
    },
    {
      id: "2",
      title: "Help",
      about: "Customer Support",
      feature: "Delivery Details",
      work: " Terms & Conditions",
      career: " Privacy Policy",
    },
    {
      id: "3",
      title: "FAQ",
      about: "Account",
      feature: "Manage Deliveries",
      work: "Orders",
      career: "Payments",
    },
    {
      id: "4",
      title: "RESOURCES",
      about: "Free eBooks",
      feature: "Development Tutorial",
      work: "How to - Blog",
      career: "Youtube Playlist",
    },
  ];

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer FooterData={FooterData} />
    </div>
  );
}

export default App;

import { useState } from "react";

// import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Login from "./Components/Pages/Login/Login";
import Signup from "./Components/Pages/Login/Signup";
import Cart from "./Components/Pages/Cart/Cart";
// import PrivateRoute from "./Components/PrivateRoute";
function App() {
  const [Loggedin, useLogged] = useState(null);
  return (
    <div>
      <Navbar Loggedin={Loggedin} useLogged={useLogged} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard  />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login useLogged={useLogged} />} />
        <Route path="/signup" element={<Signup useLogged={useLogged} />} />
      </Routes>
    </div>
  );
}

export default App;

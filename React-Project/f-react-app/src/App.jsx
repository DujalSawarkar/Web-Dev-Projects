import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Dashboard from "./Components/Pages/Dashboard";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
// import { PrivateRoute } from "./Components/PrivateRoute";
function App() {
  const [Loggedin, useLogged] = useState(false);
  return (
    <div>
      <Navbar Loggedin={Loggedin} useLogged={useLogged} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login useLogged={useLogged} />} />

        <Route path="/signup" element={<Signup useLogged={useLogged} />} />
      </Routes>
    </div>
  );
}

export default App;

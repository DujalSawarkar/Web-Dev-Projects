import { useState } from "react";
import "./App.css";
import { Routes ,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<></>}>Home</Route>
        <Route path="" element={<></>}></Route>
        <Route path="" element={<></>}></Route>
        <Route path="" element={<></>}></Route>
      </Routes>
    </div>
  );
}

export default App;

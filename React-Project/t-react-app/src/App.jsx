// import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { filterData, apiUrl } from "./data";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default App;

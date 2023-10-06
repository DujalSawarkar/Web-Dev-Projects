// import { useState } from 'react'

import "./App.css";
import { filterData, apiUrl } from "./data";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
function App() {
  // const [count, setCount] = useState(0)

  async function Fetchdata() {
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      console.log(output.data);
    } catch (error) {}
  }

  useEffect(() => {
    Fetchdata();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default App;

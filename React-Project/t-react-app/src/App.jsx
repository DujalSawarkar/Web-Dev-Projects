import { useState } from "react";
import "./App.css";
import { filterData, apiUrl } from "./data";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Loader from "./components/Loader";
function App() {
  const [courses, setcourses] = useState(null);
  const [Loading, setLoading] = useState(true);

  async function Fetchdata() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // console.log(output);
      setcourses(output.data);
    } catch (error) {
      console.log("error");
    }
    setLoading(false);
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
      <div>{Loading ? <Loader /> : <Cards courses={courses} />}</div>
    </div>
  );
}

export default App;

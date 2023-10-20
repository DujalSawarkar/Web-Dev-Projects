import { useState } from "react";
import "./App.css";
import { filterData, apiUrl } from "./data";
import { useEffect } from "react";
import Navbar from "./components/NavBar/Navbar";
import Filter from "./components/Filter/Filter";
import Loader from "./components/Loader/Loader";
import Cards from "./components/Cards/Cards";

function App() {
  const [courses, setcourses] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [data, setdata] = useState(filterData[0].title);
  const FavCourse = [];
  // console.log(data);
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
        <Filter filterData={filterData} data={data} setdata={setdata} />
      </div>
      <div>
        {Loading ? (
          <Loader />
        ) : (
          <Cards courses={courses} data={data} FavCourse={FavCourse} />
        )}
      </div>
    </div>
  );
}

export default App;

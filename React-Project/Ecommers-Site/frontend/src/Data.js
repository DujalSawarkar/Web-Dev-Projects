
import axios from "axios";

 const getdata = async () => {
  const { data } = await axios.get("http://localhost:4000/items/");
  console.log(data);
  return data;
};

export default getdata;

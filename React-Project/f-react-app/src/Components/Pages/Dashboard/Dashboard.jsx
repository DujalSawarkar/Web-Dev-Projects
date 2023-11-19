import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import ProductCart from "./Product/ProductCart";
export default function Dashboard() {
  const API_URL = "https://fakestoreapi.com/products";

  const [Post, setPost] = useState([]);
  const [Loading, setLoading] = useState();
  async function FetchData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setPost(result);
      console.log(result);
    } catch (err) {
      console.log(err, "error ");
    }
    setLoading(false);
  }
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="Dashboard-main">
      {Loading ? <div>loading</div> : <ProductCart Post={Post} />}
    </div>
  );
}

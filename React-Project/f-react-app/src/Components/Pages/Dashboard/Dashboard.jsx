import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import ProductCart from "./Product/ProductCart";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function Dashboard(props) {
  const API_URL = "https://fakestoreapi.com/products";
  const [Post, setPost] = useState([]);
  const [Loading, setLoading] = useState();
  async function FetchData(e) {
    // e.preventDefault();
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
    <div className="main">
      <div className="Dashboard-main">
        {Loading ? <div>loading</div> : <ProductCart Post={Post} />}
      </div>
      <div className="cart">
        {
          <Link to="/cart">
            <RiShoppingCartFill className="Navcart" />
          </Link>
        }
      </div>
    </div>
  );
}

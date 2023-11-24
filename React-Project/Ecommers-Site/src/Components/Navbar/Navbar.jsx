import React from "react";
import { Link } from "react-router-dom"; 
import { FaShoppingCart, FaUser } from "react-icons/fa"; 
import "./Navbar.css";
import logo from "../imgs/SHOP.CO.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Your Logo" />
      </div>
      <div className="nav-links">
        <Link to="/shop">Shop Now</Link>
        <Link to="/on-sales">On Sales</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/new-arrivals">New Arrivals</Link>
      </div>
      <div className="search-bar">
       
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-actions">
        <Link to="/cart">
          <FaShoppingCart /> 
        </Link>
        <Link to="/login">
          <FaUser />
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;

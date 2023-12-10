import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../imgs/SHOP.CO.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Your Logo" />
        </Link>
      </div>
      <div className="m-div">
        <div className="nav-links">
          <Link to="/shop">Shop</Link>
          <Link to="/on-sales">On Sales</Link>
          <Link to="/new-arrivals">New Arrivals</Link>
          <Link to="/brands">Brands</Link>
        </div>
        <div className="search-bar">
          <RiSearchLine className="search-icon" />
          <input type="text" placeholder="Search for product..." />
        </div>
      </div>
      <div className="user-actions">
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        <Link to="/login">
          <HiOutlineUserCircle />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import { FaShoppingCart, FaUser } from "react-icons/fa"; // Assuming you have a library like react-icons for icons
import "./Navbar.css";
import logo from "../imgs/SHOP.CO.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* Replace 'Your Logo' with your actual logo */}
        <img src={logo} alt="Your Logo" />
      </div>
      <div className="nav-links">
        <Link to="/shop">Shop Now</Link>
        <Link to="/on-sales">On Sales</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/new-arrivals">New Arrivals</Link>
      </div>
      <div className="search-bar">
        {/* Add your search bar component here */}
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-actions">
        <Link to="/cart">
          <FaShoppingCart /> {/* Cart Icon */}
        </Link>
        <Link to="/login">
          <FaUser /> {/* User Icon */}
        </Link>
        {/* You can also add a signup link here */}
      </div>
    </div>
  );
};

export default Navbar;

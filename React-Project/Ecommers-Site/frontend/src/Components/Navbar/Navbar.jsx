import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiSearchLine, RiArrowDropDownLine } from "react-icons/ri";
import TextField from "@mui/material/TextField";
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
          <div>
            <Link to="/shop" className="shop ">
              Shop {<RiArrowDropDownLine />}
            </Link>
          </div>
          <div>
            <Link to="/on-sales">On Sales</Link>
          </div>
          <div>
            <Link to="/new-arrivals">New Arrivals</Link>
          </div>
          <div>
            <Link to="/brands">Brands</Link>
          </div>
        </div>
        <div className="search-bar">
          <RiSearchLine className="search-icon" />
    
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

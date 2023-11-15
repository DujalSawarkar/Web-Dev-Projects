import React from "react";
import "./Navbar.css";
import logo from "./imgs/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const Navigate = useNavigate();
  const Loggedin = props.Loggedin;
  const useLogged = props.useLogged;
  const loggedout = (event) => {
    event.preventDefault();
    useLogged(false);
    Navigate("/login");
  };
  return (
    <div className="Nav-main">
      <Link>
        <img src={logo} alt="logo" />
      </Link>
      <nav className="Pages">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <div className="Button">
        {!Loggedin && (
          <Link to="/login">
            <button>Log in</button>
          </Link>
        )}
        {!Loggedin && (
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        )}
        {Loggedin && (
          <Link to="/">
            <button onClick={loggedout}>Log out</button>
          </Link>
        )}
        {Loggedin && (
          <Link to="/Dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;

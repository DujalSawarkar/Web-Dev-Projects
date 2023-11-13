import React from "react";
import "./Navbar.css";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const Loggedin = props.Loggedin;
  const useLoggedin = props.useLoggedin;

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
          <Link to={"#"}>
            <li>About</li>
          </Link>
          <Link to={"/"}>
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
            <button>Log out</button>
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

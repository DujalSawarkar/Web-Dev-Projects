import React from "react";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link>
        <img src={logo} alt="logo" />
      </Link>
      <nav>
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
      <div>
        <Link to="/login">
          <button>Log in</button>
        </Link>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
        <Link to="/">
          <button>Log out</button>
        </Link>
        <Link to="/Dashboard">
          <button>Dashboard</button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;

import React from "react";
import { useState } from "react";
import signup from "../imgs/signup.png";
import "./Login.css";

import { useNavigate } from "react-router-dom";
export default function Signup(prop) {
  const Navigate = useNavigate();
  const useLogged = prop.useLogged;

  const [FormData, useFormData] = useState({
    Username: "",
    Email: "",
    password: "",
    cnf_pass: "",
  });
  const setdata = (event) => {
    useFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    // console.log(FormData);
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    useLogged(true);
    Navigate("/dashboard");
  };
  return (
    <div className="loginmain">
      <div className="info">
        <h1>Welcome</h1>
        <h2>Lets Start!!!</h2>
        <form onSubmit={SubmitForm}>
          <label>
            <p>Enter Username</p>
            <input
              type="text"
              name="Username"
              value={FormData.Username}
              onChange={setdata}
              required
            />
          </label>
          <br />
          <label>
            <p>Enter Email</p>
            <input
              type="email"
              name="Email"
              value={FormData.Email}
              onChange={setdata}
              required
            />
          </label>
          <br />
          <label>
            <p>Enter password</p>
            <input
              type="password"
              name="password"
              value={FormData.password}
              onChange={setdata}
              required
            />
          </label>
          <br />
          <label>
            <p>conform password</p>
            <input
              type="password"
              name="cnf_pass"
              value={FormData.cnf_pass}
              onChange={setdata}
              required
            />
          </label>
          <br />
          <a href="#">Forget Password</a>
          <br />
          <br />
          <button className="Submitbtn-2">Submit</button>
        </form>
      </div>
      <div>
        <img className="img-2" src={signup} alt="signup" />
      </div>
    </div>
  );
}

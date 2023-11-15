import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../imgs/login.png";
import "./Login.css";
export default function Login(prop) {
  const Navigate = useNavigate();
  const useLogged = prop.useLogged;
  const [FormData, useFormData] = useState({
    Username: "",
    password: "",
  });
  const setdata = (event) => {
    useFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(FormData);
  };

  const SubmitForm = (event) => {
    event.preventDefault();
    useLogged(true);
    Navigate("/dashboard");
  };

  return (
    <div className="loginmain">
      <div className="info">
        <br />
        <h1>Welcome</h1>

        <h2>Lets Start!!!</h2>
        <br />
        <form onSubmit={SubmitForm}>
          <label>
            <p>Enter Email</p>
            <input
              type="text"
              name="Username"
              value={FormData.Username}
              onChange={setdata}
              required
            />
          </label>
          <br />
          <br />
          <label>
            <p>Enter Password</p>
            <input
              type="password"
              name="password"
              value={FormData.password}
              onChange={setdata}
              required
            />
          </label>
          <br />
          <a href="#">Forget Password</a>
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
      <div>
        <img className="img" src={login} alt="login" />
      </div>
    </div>
  );
}

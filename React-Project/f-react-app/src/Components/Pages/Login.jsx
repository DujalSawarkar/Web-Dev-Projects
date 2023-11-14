import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      <h1>Welcome</h1>
      <h2>Lets Start!!!</h2>
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
        <button>Submit</button>
      </form>
    </div>
  );
}

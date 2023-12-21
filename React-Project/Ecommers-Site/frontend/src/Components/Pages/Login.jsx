import React from "react";

const Login = () => {
  return (
    <div>
      <div id="form">
        <h1>Login</h1>
        <form action="" onsubmit="return validateForm()">
          <input type="text" placeholder="UserName" id="UserName" />
          <p id="usererror" class="error"></p>
          <input type="password" placeholder="password" id="password" />
          <p id="userpass" class="error"></p>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Login;

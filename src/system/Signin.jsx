import React from "react";
import "./css/Signin.css";

function Signin() {
  return (
    <div className="signin-form-container">
      <h1>Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Signin;

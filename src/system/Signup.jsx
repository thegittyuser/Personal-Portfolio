import React from "react";
import "./css/Signup.css";

function Signup() {
  return (
    <div className="signup-form-container">
      <h1>Register</h1>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" required />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;

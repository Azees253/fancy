import React, { useState } from "react";
import "./LoginPopup.css"; // Assuming you have a CSS file for styling

const LoginPoup = ({ setShowLogin }) => {
  const [current, setCurrent] = useState("Login");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{current}</h2>
          <i class="fa-solid fa-xmark" onClick={() => setShowLogin(false)}></i>
        </div>
        <div className="login-popup-input">
          {current === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" />
          )}

          <input type="text" placeholder="Your email" />
          <input type="text" placeholder="Your password" />
        </div>
        <button>{current === "Sign Up" ? "Create account" : "Login"}</button>
        {current === "Login" ? (
          <p>
            Create new account
            <span onClick={() => setCurrent("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have a account?
            <span onClick={() => setCurrent("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPoup;

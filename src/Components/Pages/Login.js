import React, { useState } from "react";
import logo from "../../Assates/logo.png";

const Login = () => {
  const [prefarence, setPrefarence] = useState("Login");
  return (
    <div className="main_box">
      <div className="head">
        <img src={logo} alt="logo" />
      </div>
      <div className="log_box">
        <div className="card">
          <h3>{prefarence}</h3>
          {prefarence !== "Login" ? (
            <input type="text" placeholder="Name" />
          ) : (
            <></>
          )}
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <span>
            <input type="checkbox" />
            <p>Remamber me.</p>
          </span>
          <button>{prefarence}</button>
        </div>
      </div>
      <div className="switch_pg">
        {prefarence !== "Login" ? (
          <span>
            <p>If you already have an account</p>
            <p className="click" onClick={() => setPrefarence("Login")}>
              Sign In
            </p>
          </span>
        ) : (
          <span>
            <p>New in Netflix</p>
            <p className="click" onClick={() => setPrefarence("Sign Up")}>
              Sign Up
            </p>
          </span>
        )}
      </div>
    </div>
  );
};

export default Login;

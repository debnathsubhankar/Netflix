import React from "react";
import logo from "../../Assates/logo.png";

const Login = () => {
  return (
    <div>
      <div className="head">
        <img src={logo} alt="logo" />
      </div>
      <div className="log_box">
        <div className="card">
          <h3>Sign Up</h3>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <span>
            <input type="checkbox" />
            <p>Remamber me.</p>
          </span>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="switch_pg">
        <span>
          <p>If you are already have an account</p>{" "}
          <p className="click">Sign In</p>
        </span>
        <span>
          <p>New in Netflix</p> <p className="click">Sign Up</p>
        </span>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import "../Components/ForgetPassword.css";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="container-forget-password">
      <div className="header">
        <h3>Forget password</h3>
      </div>
      <form action="backend.php" class="main-form" onsubmit="return myfun()">
        <div className="form">
          <label htmlFor="email" className="label-text">
            Enter a registered email
          </label>
          <input type="email" placeholder="mail@mail.com" id="email" required />
        </div>
        <button className="login-btn">Reset</button>
        <div className="not_account_yet_container-for-forget-password">
          <p>
            {" "}
            Don't have an account?{" "}
            <Link to="/register">
              <span>Register here</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default ForgetPassword;

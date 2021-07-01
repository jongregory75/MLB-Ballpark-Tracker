import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="form-signin text-center">
      <form action="POST">
        <img className="mb-4" src={logo} alt="Our logo" />
        <h1 className="h3 mb-3 fw-normal">Login Here</h1>
        <div className="form-floating" id="loginEmail">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
          />
          <label for="floatingEmail">Email address</label>
        </div>
        <div className="form-floating" id="loginPassword">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
          <label id="rememberCheckbox">
            <input type="checkbox" value="remember-me" />
            <p>Remember Me</p>
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Login
        </button>
        <Link to="/createUser">
          Need to make an account? Click here to create one!
        </Link>
      </form>
    </main>
  );
};

export default Login;

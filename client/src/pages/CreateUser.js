import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const CreateUser = () => {
  return (
    <main className="form-signin text-center">
      <form action="POST">
        <img className="mb-4" src={logo} alt="Our logo" />
        <h1 className="h3 mb-3 fw-normal">New User</h1>
        <div className="form-floating" id="createEmail">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
          />
          <label for="floatingEmail">Email address</label>
        </div>
        <div className="form-floating" id="createPassword">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Create User
        </button>
        <Link to="/login">Already have an account? Click here to Login!</Link>
      </form>
    </main>
  );
};

export default CreateUser;

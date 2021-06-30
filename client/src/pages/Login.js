import React from "react";

const Login = () => {
  return (
    <main className="form-signin text-center">
      <form action="POST">
        <img className="mb-4" src="../client/public/logo.png" alt="Our logo" />
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
        <a href="/user/create">
          Need to make an account? Click here to create one!
        </a>
      </form>
    </main>
  );
};

export default Login;

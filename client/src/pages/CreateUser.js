import React from "react";

const CreateUser = () => {
  return (
    <main className="form-signin text-center">
      <form action="POST">
        <img className="mb-4" src="../client/public/logo.png" alt="Our logo" />
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
        <a href="/user/create">Already have an account? Click here to Login!</a>
      </form>
    </main>
  );
};

export default CreateUser;

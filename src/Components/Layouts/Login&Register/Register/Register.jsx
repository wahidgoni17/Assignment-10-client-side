import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="s-email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="s-password" required />
        </div>
        <div className="form-control">
          <label htmlFor="photo-url">Photo-Url</label>
          <input type="text" name="Photo-Url" id="confirm" required />
        </div>
        <input
          className="btn-submit mb-5 btn btn-primary"
          type="submit"
          value="Sign Up"
        />
      </form>
      <p className="my-5">
        Already have an account?{" "}
        <Link className="text-violet-500" to="/login">
          Login
        </Link>
      </p>
      {/* <p className="text-error">{error}</p> */}
    </div>
  );
};

export default Register;

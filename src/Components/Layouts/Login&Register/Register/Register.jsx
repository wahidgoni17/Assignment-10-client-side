import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/Authprovider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="form-container py-8">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleRegister}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="s-email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="s-password" required />
        </div>
        <div className="form-control">
          <label htmlFor="photo">Photo-Url</label>
          <input type="text" name="photo" id="photo" required />
        </div>
        <input
          className="btn-submit mb-5 btn btn-primary"
          type="submit"
          value="Sign Up"
        />
        <p className="my-5">
          Already have an account?{" "}
          <Link className="text-violet-500" to="/login">
            Login
          </Link>
        </p>
        <p className="text-red-600">{error}</p>
      </form>
    </div>
  );
};

export default Register;

import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../../Providers/Authprovider";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page location", location);
    const from = location.state?.from?.pathname || "/chef/0";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
    .then( result => {
        const loggedUser = result.user;
        console.log(loggedUser);
    })
    .catch(error => {
        console.log(error)
    })
}

  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="Email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              id="Password"
              required
            />
            <p onClick={() => setShow(!show)}>
              <small>
                {show ? <span>Hide Password</span> : <span>Show Password</span>}
              </small>
            </p>
          </div>
          <input
            className="btn-submit mb-1 btn btn-primary"
            type="submit"
            value="Login"
          />
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-submit bg-emerald-500"
        >
          <FaGoogle className="mr-1"></FaGoogle>Sign In With Google
        </button>
        <button onClick={handleGithubSignIn} className="btn bg-slate-500 btn-submit mb-2">
          <FaGithub className="mr-1"></FaGithub>Sign In With GitHub
        </button>
        <p className="text-center pt-4">
          New to Epicurious?{" "}
          <Link className="text-violet-500" to="/register">
            Create New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

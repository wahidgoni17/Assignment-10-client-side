import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";
import { FaUserCircle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import ActiveLink from "../Routes/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));

    toast.success("LogOut Successfully")
  };
  return (
    <div className="navbar px-3 py-4 bg-slate-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blogs">Blogs</ActiveLink>
            </li>
          </ul>
        </div>
        <Link to="/">
          <h1 className="text-3xl font-bold">Epicurious</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-lg menu-horizontal px-1">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/blogs">Blogs</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && <div className="tooltip" data-tip={user?.email }><FaUserCircle className="mr-3 text-4xl"></FaUserCircle></div>}
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-outline btn-error text-white"
          >
            Log Out
          </button>
        ) : (
          <ActiveLink to="/login">
            <button className="btn btn-outline btn-error text-white mr-2">
              Log In
            </button>
          </ActiveLink>
        )}
        <ToastContainer
        position="top-center"
        autoClose={1000}
        pauseOnHover={false}/>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import food from '../../../assets/food.jpg'

const Cook = () => {
  return (
    <div>
      <div className="text-center pb-10">
        <h1 className="text-slate-400">
          Learn Pro tips and Techniques that make cooking easier.{" "}
          <Link to="/register">
            <span className="text-red-400">Create a Profile</span>
          </Link>
        </h1>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${food})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <p className="mb-5 text-xl text-white">
              Online Cooking Recipe Community
            </p>
            <h1 className="mb-5 text-4xl text-white font-bold">Cook foods By Watching our recipe Videos</h1>
            <button className="btn btn-error border-none text-white hover:bg-red-600"><FaVideo className="mr-3"/> Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cook;

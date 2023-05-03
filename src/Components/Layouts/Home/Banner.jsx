import React from "react";
import food from "../../../assets/food1.jpg"

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen rounded"
        style={{
          backgroundImage: `url(${food})`,
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Satisfy Your Cravings with Us</h1>
            <p className="mb-5">
            Discover new flavors and delight your taste buds,Join our community of foodies and share your culinary journey,Cook with confidence: our recipes are tried and true
            </p>
            <button className="btn btn-error text-white">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

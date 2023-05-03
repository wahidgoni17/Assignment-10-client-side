import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import Recipe from "./Recipe";

const ChefDetails = ({ data }) => {
  const {
    id,
    name,
    num_recipes,
    years_of_experience,
    photo_url,
    likes,
    bio,
    recipes,
  } = data;
  console.log(data);

  return (
    <div>
      <div className="hero my-5">
        <div className="hero-content flex-col lg:flex-row gap-6">
          <img
            src={photo_url}
            className="max-w-sm h-64 rounded-lg shadow-2xl"
          />
          <div className="py-5">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-3 text-lg">{bio}</p>
            <p className="text-lg">
              Years of Experience: {years_of_experience}
            </p>
            <p className="text-lg">Number of Recipes: {num_recipes}</p>
            <p className="flex items-center gap-2">
              <FaThumbsUp />
              Likes: {likes}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <h1 className="text-5xl font-bold">Recipes</h1>
      </div>
      <div className="grid grid-cols-1 my-10 mx-10 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Recipe key={recipes.r_id} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;

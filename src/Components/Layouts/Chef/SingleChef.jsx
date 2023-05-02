import React from "react";
import { Link } from "react-router-dom";

const SingleChef = ({chef}) => {
    console.log(chef)
    const {id,
        name, 
        num_recipes, 
        years_of_experience,
        photo_url,
        likes} = chef
  return (
    <div className="card bg-slate-50 w-96 shadow-xl">
      <figure>
        <img className="h-64 w-full"
          src={photo_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2><hr />
        <p>Years of Experience: {years_of_experience}</p>
        <p>Number of Recipes: {num_recipes}</p>
        <p>Likes: {likes}</p>
        <div className="card-actions mt-3 justify-end">
          <Link to={`/recipe/${id}`}><button className="btn bg-red-600 hover:bg-red-400 text-white border-none">View Recipe</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;

import React from "react";
import { FaHeart } from "react-icons/fa";

const Recipe = ({ recipe }) => {
  const { recipe_name, cooking_method, ingredients, rating } = recipe;
  console.log(recipe);
  return (
    <div className="card w-96 bg-slate-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-3xl mb-4">{recipe_name}</h2>
        <p><span className="text-xl">Cooking Method:</span> {cooking_method}</p>
        <div><span className="text-xl">Ingridients:</span>
            {
                ingredients.map((ingredient,index)=><li key={index}>{ingredient}</li>)
            }
        </div>
        <p><span className="text-xl">Rating:</span> {rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"><FaHeart/> Add Favourite</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

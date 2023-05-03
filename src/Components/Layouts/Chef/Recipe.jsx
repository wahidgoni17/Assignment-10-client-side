import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const Recipe = ({ recipe }) => {
  const { recipe_name, cooking_method, ingredients, rating } = recipe;
  const [buttonDisabled, setButtonDisabled] = useState(false);
    const handleFavourite = () =>{
        toast('Add To Favourite Successfully')
        setButtonDisabled(true)
    }

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
          <button onClick={handleFavourite} disabled={buttonDisabled} className="btn btn-primary"><FaHeart/> Add Favourite</button>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

// import React, { useState } from 'react';

// function App() {
//   const [buttonDisabled, setButtonDisabled] = useState(false);

//   const handleClick = () => {
//     setButtonDisabled(true);
//   };

//   return (
//     <div>
//       <button onClick={handleClick} disabled={buttonDisabled}>
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default App;

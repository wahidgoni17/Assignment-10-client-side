import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipe = () => {
    const {id} = useParams()
    const recipe = useLoaderData()
    console.log(recipe)
    return (
        <div>
            { id && <h2>This is recipe section: {recipe.length}</h2>}
        </div>
    );
};

export default ChefRecipe;
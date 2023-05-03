import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from './ChefDetails';

const ChefRecipe = () => {
    const chefData = useLoaderData()
    return (
        <div>
            {
                chefData.map(data=><ChefDetails key={data.id} data={data}></ChefDetails>)
            }
        </div>
    );
};

export default ChefRecipe;
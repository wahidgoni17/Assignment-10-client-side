import React, { useEffect, useState } from 'react';
import SingleFood from './SingleFood';

const Foods = () => {
    const [foods, setFoods] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5496/food`)
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])
    return (
        <div className='py-10'>
            <div className='text-center'>
                <h3 className='text-4xl font-bold py-2'>Explore Awesome Meals</h3>
                <p className='text-slate-600'>Discover new flavors and delight your taste buds,From kitchen to table: easy and delicious meals</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    foods.map(food => <SingleFood key={food.id} food={food}></SingleFood>)
                }
            </div>
        </div>
    );
};

export default Foods;
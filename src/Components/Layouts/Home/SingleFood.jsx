import React from 'react';

const SingleFood = ({food}) => {
    const {food_name, picture_url} = food
    return (
        <div className='bg-slate-50 py-10 px-10'>
            <img className='h-64 w-96 mb-4' src={picture_url} alt="" />
            <p className='text-xl text-center font-medium'>{food_name}</p>
        </div>
    );
};

export default SingleFood;
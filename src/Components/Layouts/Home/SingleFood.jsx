import React from 'react';

const SingleFood = ({food}) => {
    const {food_name, picture_url} = food
    return (
        <div className='py-5 mx-20 rounded-xl'>
            <img className='h-64 w-full mb-4  rounded-xl' src={picture_url} alt="" />
            <p className='text-xl text-center font-medium'>{food_name}</p>
        </div>
    );
};

export default SingleFood;
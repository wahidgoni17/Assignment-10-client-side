import React from 'react';

const SingleFood = ({food}) => {
    const {food_name, picture_url} = food
    return (
        <div className='py-10 mx-12'>
            <img className='h-28 w-28 mb-4  rounded-full' src={picture_url} alt="" />
            <p className='text-xl text-center font-medium'>{food_name}</p>
        </div>
    );
};

export default SingleFood;
import React, { useEffect, useState } from 'react';
import SingleChef from './SingleChef';

const Chefs = () => {
    const [chefs, setChefs] = useState([])
    const [showAll, setShowAll] = useState(false);
    useEffect(()=>{
        fetch(`https://assignment-10-server-side-wahidgoni17.vercel.app/chef`)
        .then(res => res.json())
        .then(data => {
            if (showAll) {
              setChefs(data);
            } else {
              setChefs(data.slice(0, 3));
            }
          })
    },[showAll])
    const handleShowAll = () => {
        setShowAll(true);
      };
    return (
        <div className="py-10">
      <div className="text-center">
        <h3 className="text-4xl font-bold py-2">Meet Our Chefs</h3>
        <p className="text-slate-600">
        Meet the culinary geniuses behind our delicious recipes,Talented chefs bringing you inspired dishes from around the world,<br /> Experience gourmet cooking at home with our expert chefs
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 lg:px-20 pt-10 pb-5">
        {chefs.map((chef) => (
          <SingleChef key={chef.id} chef={chef}></SingleChef>
        ))}
      </div>
      <div className="text-center mt-5 py-5">
        {!showAll && (
          <button onClick={handleShowAll} className="btn btn-error text-white">
            Show All
          </button>
        )}
      </div>
    </div>
    );
};

export default Chefs;
import React, { useEffect, useState } from 'react';
import SingleChef from './SingleChef';

const Chefs = () => {
    const [chefs, setChefs] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5496/chef`)
        .then(res => res.json())
        .then(data => setChefs(data))
    },[])
    return (
        <div className="py-10">
      <div className="text-center">
        <h3 className="text-4xl font-bold py-2">Meet Our Chefs</h3>
        <p className="text-slate-600">
        Meet the culinary geniuses behind our delicious recipes,Talented chefs bringing you inspired dishes from around the world,<br /> Experience gourmet cooking at home with our expert chefs
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 px-20 py-10">
        {chefs.map((chef) => (
          <SingleChef key={chef.id} chef={chef}></SingleChef>
        ))}
      </div>
      {/* <div className="text-center mt-5 py-10">
        {!showAll && (
          <button onClick={handleShowAll} className="btn btn-primary">
            Show All
          </button>
        )}
      </div> */}
    </div>
    );
};

export default Chefs;
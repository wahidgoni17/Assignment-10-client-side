import React from 'react';
import Banner from './Banner';
import Foods from './Foods';
import Chefs from '../Chef/Chefs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import Foods from './Foods';
import Chefs from '../Chef/Chefs';
import Cook from './Cook';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <Chefs></Chefs>
            <Cook></Cook>
        </div>
    );
};

export default Home;
import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import AllBikes from '../BikesCategory/AllBikes';
import BikesCategory from '../BikesCategory/BikesCategory';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <BikesCategory></BikesCategory>
            <About></About>
            {/* <AllBikes></AllBikes> */}
        </div>
    );
};

export default Home;
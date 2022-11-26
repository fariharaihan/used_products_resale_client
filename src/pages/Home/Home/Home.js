import React from 'react';
import Banner from '../Banner/Banner';
import AllBikes from '../BikesCategory/AllBikes';
import BikesCategory from '../BikesCategory/BikesCategory';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <BikesCategory></BikesCategory>
            {/* <AllBikes></AllBikes> */}
        </div>
    );
};

export default Home;
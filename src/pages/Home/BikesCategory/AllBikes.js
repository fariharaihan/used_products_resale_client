import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BikeCategoryCard from './BikeCategoryCard';

const AllBikes = () => {
    const data = useLoaderData()
    console.log(data)


    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data?.map(bikeCard => <BikeCategoryCard
                        key={bikeCard._id}
                        bikeCard={bikeCard}
                    ></BikeCategoryCard>)
                }
            </div>
        </div>
    );
};

export default AllBikes;
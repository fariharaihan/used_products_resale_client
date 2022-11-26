import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BikesCategory = () => {
    const [bikesData, setBikesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bikeCategoryCollection')
            .then(res => res.json())
            .then(data => setBikesData(data))
    })

    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold text-purple-900'>All Bikes</h2>
            </div>
            <div className='flex justify-center mt-6 '>
                {
                    bikesData.map(data => <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <Link to={`/allbikes/${data.category_id}`}>
                            <button className='btn bg-primary text-white w-32'>
                                {data.Name}
                            </button>
                        </Link>
                    </div>)

                }
            </div>
        </div>
    );
};

export default BikesCategory;
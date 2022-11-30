import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BikesCategory = () => {
    // const [bikesData, setBikesData] = useState([]);

    const { data: bikesData = [] } = useQuery({
        queryKey: ['bikesData'],
        queryFn: async () => {
            const res = await fetch('https://y-bay-pi.vercel.app/bikeCategoryCollection')
            const data = await res.json();
            return (data);
        }
    })

    // useEffect(() => {
    //     fetch('https://y-bay-pi.vercel.app/bikeCategoryCollection')
    //         .then(res => res.json())
    //         .then(data => setBikesData(data))
    // })

    return (
        <section className='my-4'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold text-purple-900'>All Bikes</h2>
                <p className='text-xl'>You can sellect your favourite one.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center my-10 '>
                {
                    bikesData.map(data => <div >
                        <Link to={`/allbikes/${data.category_id}`}>
                            <button className='btn bg-primary text-white w-64'>
                                {data.Name}
                            </button>
                        </Link>
                    </div>)
                }
            </div>
        </section>
    );
};

export default BikesCategory;
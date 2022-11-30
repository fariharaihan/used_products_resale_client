import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BikeCategoryCard from './BikeCategoryCard';
import BookingModal from './BookingModal';

const AllBikes = () => {
    const data = useLoaderData();
    // console.log(data)
    const [bookingBike, setBookingBike] = useState([null]);


    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data?.map(bikeCard => <BikeCategoryCard
                        key={bikeCard._id}
                        bikeCard={bikeCard}
                        setBookingBike={setBookingBike}
                    ></BikeCategoryCard>)
                }
            </div>
            {
                bookingBike &&
                <BookingModal
                    bookingBike={bookingBike}
                    setBookingBike={setBookingBike}
                ></BookingModal>
            }
        </div>
    );
};

export default AllBikes;
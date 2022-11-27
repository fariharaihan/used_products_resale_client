import React from 'react';

const BikeCategoryCard = ({ bikeCard, setBookingBike }) => {
    const { image_url,
        title, location,
        time, original_price,
        resale_price, uses_time, seller_name } = bikeCard
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='px-5 pt-10' src={image_url} alt="Shoes" /></figure>
            <div className="card-body  items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>Original price: {original_price}</p>
                <p>Resale price: {resale_price}</p>
                <p>Year of use: {uses_time}</p>
                <p>Post date: {time}</p>
                <p>Location: {location}</p>
                <p>Seller name: {seller_name}</p>


            </div>
            <div className='card-actions justify-center mb-5'>
                <label
                    htmlFor="booking-modal"
                    className="btn btn-primary"
                    onClick={() => setBookingBike(bikeCard)}
                >Book now</label>
            </div>
        </div>
    );
};

export default BikeCategoryCard;
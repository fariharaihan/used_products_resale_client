import React from 'react';

const BikeCategoryCard = ({ bikeCard }) => {
    const { image_url, title, location, time } = bikeCard
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='px-5 pt-10' src={image_url} alt="Shoes" /></figure>
            <div className="card-body  items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>Original price: { }</p>
                <p>Resale price: { }</p>
                <p>Year of use: { }</p>
                <p>Post date: {time}</p>
                <p>Location: {location}</p>
                <p>Seller name:{ }</p>


            </div>
        </div>
    );
};

export default BikeCategoryCard;
import React from 'react';

const BikeCategoryCard = ({ bikeCard }) => {
    const { image_url, title } = bikeCard
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='px-10 pt-10' src={image_url} alt="Shoes" /></figure>
            <div className="card-body  items-center text-center">
                <h2 className="card-title">{title}</h2>


            </div>
        </div>
    );
};

export default BikeCategoryCard;
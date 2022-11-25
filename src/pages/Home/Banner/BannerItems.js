import React from 'react';
import './Banner.css'

const BannerItems = ({ slide }) => {
    const { image, id, prv, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='w-full carousel-img'>
                <img src={image} alt="" className="w-full h-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5  md:left-24 lg:left-24 top-1/3 ">
                <h1 className='text-4xl font-semibold lg:text-6xl lg:font-bold text-white'>
                    Be Limitless <br />
                    With Your Favourite <br />
                    One.
                </h1>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prv}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>

        </div>
    );
};

export default BannerItems;
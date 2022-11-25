import React from 'react';
import img1 from '../../../assets/img1.webp'
import img2 from '../../../assets/img2.webp'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/image4.jpg'
import BannerItems from './BannerItems';

const Banner = () => {
    const bannerData = [
        {
            image: img1,
            prv: 4,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prv: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prv: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prv: 3,
            id: 4,
            next: 1
        }
    ]


    return (
        <div className="carousel w-full py-10">

            {
                bannerData.map(slide => <BannerItems
                    key={slide.id}
                    slide={slide}
                ></BannerItems>)
            }

        </div>
    );
};

export default Banner;
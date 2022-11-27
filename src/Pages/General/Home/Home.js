import React from 'react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import Cars from '../Cars/Cars';
import WhyFantasy from '../WhyFantasy/WhyFantasy';

const Home = () => {
    return (
        <div>
            <CarouselBanner></CarouselBanner>
            <Cars></Cars>
            <WhyFantasy></WhyFantasy>
        </div>
    );
};

export default Home;
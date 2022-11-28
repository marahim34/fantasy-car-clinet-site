import React from 'react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import Cars from '../Cars/Cars';
import Categories from '../categories/Categories';
import CategorywiseItems from '../CategorywiseItems/CategorywiseItems';
import WhyFantasy from '../WhyFantasy/WhyFantasy';

const Home = () => {
    return (
        <div>
            <CarouselBanner></CarouselBanner>
            <Cars></Cars>
            <Categories></Categories>
            <WhyFantasy></WhyFantasy>
        </div>
    );
};

export default Home;
import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';

const CarouselBanner = () => {
    const images = [
        {
            original: 'https://i.ibb.co/kGJ2x80/Audi.webp',
        },
        {
            original: 'https://i.ibb.co/R3CyX8G/BMW.webp',
        },
        {
            original: 'https://i.ibb.co/wScMpmY/Renault.webp',
        },
    ];

    return (
        <section>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24">
                <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                    <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                        <div>
                            <div className="relative w-full max-w-lg">
                                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                                <div className="relative">
                                    <ImageGallery items={images}></ImageGallery>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                        <span className="md:mb-8 text-3xl md:text-5xl font-bold  text-yellow-600"> Your dream is a click away! </span>
                        <h1 className="md:mb-8 text-2xl md:text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">We care your dream.</h1>
                        <p className="mb-8 text-sm md:text-base leading-relaxed text-left text-gray-500">Visit our store and let us know your preferences. We promise to help you realize your dreams in the most reasonable ways.</p>
                        <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                            <div className="mt-3 rounded-lg sm:mt-0">
                                <Link> <button className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700">Our Store</button></Link>
                            </div>
                            <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                                <Link><button className="items-center block px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700">Login</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarouselBanner;
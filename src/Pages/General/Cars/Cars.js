import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';

const Cars = () => {
    // const [allCars, setAllCars] = useState([]);

    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cars`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-10'>Marketplace</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center ml-4 gap-4'>
                {
                    cars.map(car => <CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
        </div>
    );
};

export default Cars;
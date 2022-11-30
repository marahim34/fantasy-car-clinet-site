import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://fantasy-car-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-10'>{categories.length}</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center ml-4 gap-4'>
                {
                    categories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>        </div>
    );
};

export default Categories;
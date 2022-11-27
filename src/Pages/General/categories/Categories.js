import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Categories = () => {
    const { data: categories } = useQuery({
        queryKey: 'categories',
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>

        </div>
    );
};

export default Categories;
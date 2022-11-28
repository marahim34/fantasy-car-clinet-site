import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryItem from './CategoryItem';

const CategorywiseItems = () => {
    const categoryItems = useLoaderData();
    console.log(categoryItems);

    return (
        <div>
            {/* {data.length} */}
            {/* <p>{categoryItems.length}</p> */}
            <p>What is happening {categoryItems.length}</p>
            {
                categoryItems.map(categoryItem => <CategoryItem key={categoryItem._id} categoryItem={categoryItem}></CategoryItem>)
            }
        </div>
    );
};

export default CategorywiseItems;
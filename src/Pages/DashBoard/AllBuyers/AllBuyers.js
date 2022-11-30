import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllBuyers = () => {
    const roleUsers = useLoaderData();
    console.log(roleUsers);


    // useEffect(({ params }) => {
    //     fetch(`http://localhost:5000/user/${params.role}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }, [])

    return (
        <div>


        </div>
    );
};

export default AllBuyers;
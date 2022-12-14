import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const AllBuyers = () => {
    const sellers = useLoaderData();
    console.log(sellers);

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch('https://fantasy-car-server-marahim34.vercel.app/users');
                const data = await res.json();
                return data;
                console.log(data);
            }
            catch (error) {

            }
        }

    })

    const handleDeleteSeller = seller => {
        const proceed = window.confirm('Are you sure, you want to DELETE the Seller?');
        if (proceed) {
            fetch(`https://fantasy-car-server-marahim34.vercel.app/users/${seller._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        toast.success(`The buy has been deleted successfully`);
                    }
                })
        }
    }

    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-10'>Sellers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, index) =>
                                <tr key={seller._id}>
                                    <th>{index + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td><button onClick={() => handleDeleteSeller(seller)} className='btn btn-xs btn-danger'>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllBuyers;
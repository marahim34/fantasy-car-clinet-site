import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const ListWiseSellerAndBuyers = () => {
    const buyers = useLoaderData();
    console.log(buyers);

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch('https://fantasy-car-server-marahim34.vercel.app/users');
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }

    })

    const handleDeleteBuyer = buyer => {
        const proceed = window.confirm('Are you sure, you want to DELETE the buyer?');
        if (proceed) {
            fetch(`https://fantasy-car-server-marahim34.vercel.app/users/${buyer._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        toast.success(`The buy has been deleted successfully`)
                    }

                })
        }
    }

    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-10'>Buyers</h1>
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
                            buyers.map((buyer, index) =>
                                <tr key={buyer._id}>
                                    <th>{index + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td><button onClick={() => handleDeleteBuyer(buyer)} className='btn btn-xs btn-danger'>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ListWiseSellerAndBuyers;
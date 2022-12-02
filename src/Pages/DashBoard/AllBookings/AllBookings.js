import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllBookings = () => {
    const [allbookings, setAllbookings] = useState([]);

    useEffect(() => {
        fetch('https://fantasy-car-server-marahim34.vercel.app/allbookings', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllbookings(data))
    }, [])

    // const { data: bookings = [] } = useQuery({
    //     queryKey: ['bookings'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://fantasy-car-server-marahim34.vercel.app/bookings`, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         });
    //         const data = await res.json();
    //         // console.log(data);
    //         return data;
    //     }
    // })

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Bookings</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Car Model</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allbookings?.map((booking, index) =>
                                <tr key={booking._id}>
                                    <th>{index + 1}</th>
                                    <td>{booking.clinetName}</td>
                                    <td>{booking.model}</td>
                                    <td>{booking.price}</td>
                                    <td>{booking.date}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid &&
                                            <Link
                                                to={`/dashboard/payment/${booking._id}`}>
                                                <button className='btn btn-primary btn-sm'>Pay Now</button></Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-primary'>Paid</span>
                                        }

                                    </td>
                                    <td>Delete</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default AllBookings;
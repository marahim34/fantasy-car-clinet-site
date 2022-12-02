import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyBooking = () => {
    const { user } = useContext(AuthContext);

    const [myBooking, setMyBooking] = useState([]);


    const url = `https://fantasy-car-server-marahim34.vercel.app/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyBooking(data)
            })
    }, [user?.email])

    const handleDeleteDoctor = doctor => {
        fetch(`https://fantasy-car-server-marahim34.vercel.app/bookings/${myBooking._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    // refetch();
                    toast.success(`${myBooking.name} has been deleted successfully`)
                }

            })
    }

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
                            myBooking?.map((booking, index) =>
                                <tr key={booking._id}>
                                    <th>{index + 1}</th>
                                    <td>{booking.clinetName}</td>
                                    <td>{booking.model}</td>
                                    <td>{booking.price}</td>
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
                                    <td>

                                        {
                                            <label htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                            // onClick={() => setDeletingDoctor(booking)} 
                                        }</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyBooking;
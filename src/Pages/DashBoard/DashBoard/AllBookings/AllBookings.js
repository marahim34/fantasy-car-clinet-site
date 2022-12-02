import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const AllBookings = () => {
    const { user } = useContext(AuthContext);
    const [myBooking, setMyBooking] = useState({});
    const [loading, setLoading] = useState(true);

    useState(() => {
        fetch(`https://fantasy-car-server-marahim34.vercel.app/bookings/${user.email}`,
            // {
            //     headers: {
            //         authorization: `bearer ${localStorage.getItem('accessToken')}`
            //     }
            // }
        )
            .then(res => res.json())
            .then(data => setMyBooking(data)
            )
    }, [])

    return (
        <div>

            {/* <AllBuyers></AllBuyers> */}
            <h3 className='text-3xl'>All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBooking.map((booking, index) =>

                                <tr key={booking._id}>
                                    <th>{index + 1}</th>
                                    <td>{booking.model}</td>
                                    <td>{booking.sellPrice}</td>

                                    {/* <td>{booking?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>                                <td><button className='btn btn-xs btn-danger'>Delete</button></td> */}
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllBookings;
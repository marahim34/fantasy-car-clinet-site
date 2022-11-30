import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

import Header from '../Pages/Shared/Header/Header';
const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard/my-booking'>My Booking</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/users'>Users</Link></li>
                                <li><Link to='/dashboard/bookings'>All Bookings</Link></li>
                                {/* <li><Link to='/dashboard/users/'>Buyers and Sellers</Link></li> */}
                                <li><Link to='/dashboard/manage-doctors'>Manage Doctors</Link></li>
                            </>
                        }
                        {
                            <>
                                <li><Link to='/dashboard/add-car'>Add A Car</Link></li>
                                <li><Link to='/dashboard/myCars'>My Products</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;
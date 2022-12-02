import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';

import Header from '../Pages/Shared/Header/Header';
const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

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
                        {!isAdmin && !isSeller &&
                            <>
                                <li><Link to='/dashboard/my-booking'>My Booking</Link></li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/users'>All Users</Link></li>
                                <li><Link to='/dashboard/bookings'>All Bookings</Link></li>
                                <li><Link to='/dashboard/users/role/buyer'>Buyers</Link></li>
                                <li><Link to='/dashboard/users/role/seller'>Sellers</Link></li>
                                <li><Link to='/dashboard/users/role/reported-items'>Reported Items</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/add-car'>Add A Car</Link></li>
                                <li><Link to='/dashboard/myCars'>My Cars</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Header = () => {
    const { user, logOut, setLoading } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // setLoading(true);
                localStorage.removeItem('accessToken')
                setLoading(false)
            })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/cars'>Marketplace</Link></li>
        {user?.uid ?
            <>
                <li><Link>{user?.uid ? user?.displayName : <img src={user?.photoURL} alt="" />}</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li>   <button className='btn btn-outline btn-primary' onClick={handleLogOut}>Log Out</button></li>
            </>
            :
            <li><Link to='/login'>Login</Link></li>
        }
        <li><Link to='/blog'>Blog</Link></li>

    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Fantasy Car</Link>
                    <p className='hidden md:block pl-4'>Your dream is just a click away!</p>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal">
                    {menuItems}
                </ul>
            </div>
            {
                !user?.uid &&
                <div className="navbar-end">
                    <Link to='/register' className="btn">Register Now!</Link>
                </div>
            }        </div>
    );
};

export default Header;
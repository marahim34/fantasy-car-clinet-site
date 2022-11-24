import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        {user?.uid ?
            <>
                <li tabIndex={0}>
                    {user?.photoURL ?
                        <span className='avatar w-1/2'>
                            <img src={user?.photoURL} alt='' className=' w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'></img>
                        </span> :
                        <span className='avatar w-1/2'>
                            <img src="https://i.ibb.co/rH3mSXF/blank-avatar.jpg" alt='' className=' w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'></img>
                        </span>
                    }
                    <ul className="p-2">
                        <li><Link>{user?.displayName}</Link></li>
                        <button className='btn btn-outline btn-primary' onClick={handleLogOut}>Log Out</button>
                    </ul>
                </li>
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
                <div className='fle'>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Fantasy Car</Link>
                    <p className='hidden md:block pl-4'>Your dream is just a click away!</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-10">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/register' className="btn">Register Now!</Link>
            </div>
        </div>
    );
};

export default Header;
import React, { use, useState } from 'react';
import { TbLogin2 } from 'react-icons/tb';
import { Link, NavLink } from 'react-router';
import logo from '../assets/Sunflower-01.png'
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { LuLogOut } from 'react-icons/lu';

const NavBar = () => {

    const { user, logOutUser } = use(AuthContext);
    const [show, setShow] = useState(false)
    // console.log(user)

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success('SignOut success')
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    const links = <div className='navbarColor flex lg:flex-row flex-col'>
        <li><NavLink className={`md:font-medium  md:text-lg text-accent`} to={`/`}>Home</NavLink></li>
        <li><NavLink className={`md:font-medium md:text-lg text-accent`} to={`/profile`}>My Profile</NavLink></li>
    </div>
    return (
        <div className="max-w-11/12 mx-auto">
            <div className="navbar py-1 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost px-1 bg-none lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 md:p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={`/`}><img src={logo} alt="Sunflower Logo" className=' w-25 md:w-40 cursor-pointer' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="navbar-end flex  gap-2 md:gap-4">
                                <div onMouseEnter={() => setShow(true)}
                                    onMouseLeave={() => setShow(false)}
                                    className=' flex relative items-center justify-center '>
                                    <div className='absolute z-40 '>
                                        {
                                            show && <h2 className='text-sm md:text-lg font-normal md:font-medium dropdown-content bg-base-100 rounded-box z-1 mt-25 w-35 md:w-50 p-2 shadow text-secondary '>{user.displayName}</h2>
                                        }
                                    </div>
                                    <div className='h-10 w-10 rounded-full border-accent'>
                                        <img src={user.photoURL} alt={user.displayName} className={`h-10 w-10 rounded-full cursor-pointer object-cover`} />
                                    </div>
                                </div>
                                <Link onClick={handleLogOut} to={`/`} className="btn text-sm md:text-[16px] border-none bg-base-100 text-secondary px-3 md:px-4 py-2 hover:btn-primary hover:bg-primary hover:text-white"><LuLogOut /> Log Out</Link>

                            </div>
                            :
                            <div className="navbar-end flex gap-4">
                                <Link to={`/login`} className="btn text-sm md:text-[16px] border-none bg-base-100 text-secondary py-2 px-3 md:px-4 hover:btn-primary hover:bg-primary hover:text-white"><TbLogin2 /> Log in</Link>
                                <Link to={`/register`} className="btn text-sm md:text-[16px] px-3  md:px-4 py- btn-secondary ">Sign up</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
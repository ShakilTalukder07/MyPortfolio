import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-transparent rounded-box w-52">
                            <li><a href='/'>Home</a></li>
                            <li><HashLink to='/#about'>About</HashLink></li>
                            <li><HashLink to='/#experience'>Experience</HashLink></li>
                            {/* <li><HashLink to="/#services">Services</HashLink></li> */}
                            <li><HashLink to={'/#portfolio'}>Portfolio</HashLink></li>
                            {/* <li><HashLink to="#testimonial">Testimonials</HashLink></li> */}
                            <li><HashLink to={'/blog'}>Blog</HashLink></li>
                            <li><HashLink to="/#contact">Contact</HashLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl" href='/'>Shakil T.</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='/'>Home</a></li>
                        <li><HashLink to='/#about'>About</HashLink></li>
                        <li><HashLink to='/#experience'>Experience</HashLink></li>
                        {/* <li><HashLink to="/#services">Services</HashLink></li> */}
                        <li><HashLink to={'/#portfolio'}>Portfolio</HashLink></li>
                        {/* <li><HashLink to="#testimonial">Testimonials</HashLink></li> */}
                        <li><HashLink to={'/blog'}>Blog</HashLink></li>
                        <li><HashLink to="/#contact">Contact</HashLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-transparent">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-3xl">Shakil</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 mr-10">
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
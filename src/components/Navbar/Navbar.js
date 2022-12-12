import React from 'react';
import { Link } from 'react-router-dom';

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
                        {/* <li><a href='#about'>About</a></li> */}
                        {/* <li><a href='#experience'>Experience</a></li> */}
                        {/* <li><a href="#services">Services</a></li> */}
                        <li><Link to={'/portfolio'}>Portfolio</Link></li>
                        {/* <li><a href="#testimonial">Testimonials</a></li> */}
                        <li><Link to={'/blog'}>Blog</Link></li>
                        {/* <li><a href="#contact">Contact</a></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
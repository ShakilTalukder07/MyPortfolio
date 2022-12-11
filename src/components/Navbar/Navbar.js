import React, { useState } from 'react';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <div className="navbar bg-transparent">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-xl">Shakil</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='/' onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>Home</a></li>
                        <li><a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'about' : ''}>About</a></li>
                        <li><a href='#experience'>Experience</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        {/* <li><a href="#testimonial">Testimonials</a></li> */}
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
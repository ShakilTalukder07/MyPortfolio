import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from 'react-icons/ai'
import { RiServiceFill } from 'react-icons/ri'
import { BiMessageRoundedAdd } from 'react-icons/bi'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <div className="navbar bg-transparent">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='/' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a></li>
                        <li><a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'about' : ''}>About</a></li>
                        <li><a href='#experience'>Experience</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
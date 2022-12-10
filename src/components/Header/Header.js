import React from 'react';
import profile from '../../assets/images/profile.png'
import CTA from './CTA';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-1/2 ml-10'>
                        <h5 className='text-4xl font-bold m-2'>Hello, I'm</h5>
                        <h1 className='text-4xl font-bold m-2'>Shakil Talukder</h1>
                        <h5 className='text-2xl text-red-400 font-bold m-2'>FrontEnd Developer</h5>
                        <CTA></CTA>
                    </div>
                    <div className='shadow-lg me'>
                        <img className='' src={profile} alt='/' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
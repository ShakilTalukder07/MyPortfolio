import React from 'react';
import profile from '../../assets/images/profile.png';
import firstImage from '../../assets/images/firstImage.png'
import CTA from './CTA';
import './Header.css'
import { Typewriter } from 'react-simple-typewriter'


const Header = () => {

    return (
        <div>
            <div className="hero my-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-1/2 '>
                        <h5 className='text-4xl font-bold m-2'>Hello, I'm</h5>
                        <h1 className='text-4xl font-bold m-2'>Shakil Talukder</h1>
                        <h5 className='text-2xl text-red-400 font-bold m-2'>
                            <Typewriter
                                words={['FrontEnd Developer', 'React Developer', 'MERN Stack Developer']}
                                loop={100}
                                cursor
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h5>
                        <CTA></CTA>
                    </div>
                    <div className='shadow-lg me'>
                        <img className='h-[320px]' src={firstImage} alt='/' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
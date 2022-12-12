import React from 'react';
import './About.css'
import about from '../../assets/images/about.JPG'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaAward } from 'react-icons/fa'
import { HiFolder } from 'react-icons/hi'

const About = () => {
    return (
        <section id='about' className='my-10'>
            <h2 className='text-center text-2xl font-bold  text-cyan-300'>Get To Know</h2>
            <h3 className='text-center text-cyan-300'>About Me</h3>
            <div>
                <div className="hero bg-transparent mt-6">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div>
                            <img className='shadow-lg about rounded-2xl' alt='' src={about} />
                        </div>
                        <div className='w-1/2'>
                            <div className='grid grid-cols-1 lg:grid-cols-3'>
                                <div className="card w-56 shadow-2xl  flex items-center">
                                    <div className="card-body bg-violet-900 rounded-lg">
                                        <FaAward></FaAward>
                                        <h2 className="card-title">Experience</h2>
                                        <p>Fresher</p>
                                    </div>
                                </div>
                                <div className="card w-56 shadow-2xl flex items-center">
                                    <div className="card-body bg-violet-900 rounded-lg px-14">
                                        <BsFillPeopleFill></BsFillPeopleFill>
                                        <h2 className="card-title">Clients</h2>
                                        <p>Not Yet</p>
                                    </div>
                                </div>
                                <div className="card w-56 shadow-2xl flex items-center">
                                    <div className="card-body bg-violet-900 rounded-lg">
                                        <HiFolder></HiFolder>
                                        <h2 className="card-title">Projects</h2>
                                        <p>20+ Completed</p>
                                    </div>
                                </div>
                            </div>
                            <p className="py-6">I'm a frontend-based full-stack developer from Bangladesh. I love web development because I can showcase my creativity in this work. I want to see myself as a skilled web developer with my hard work. I want to work with someone who can help me develop both my professional and personal abilities. Currently, I'm studying Computer Science and Engineering at National University.</p>
                            <a href="#contact" className='btn bg-white text-sky-500 shadow-2xl'>Let's Talk</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
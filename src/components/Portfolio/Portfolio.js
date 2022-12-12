import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Projects from './Projects';
import resala1 from '../../assets/projectImages/resala.png';
import genox1 from '../../assets/projectImages/genox1.png';
import quiz1 from '../../assets/projectImages/quiz1.png'
import { HashLink } from 'react-router-hash-link';

const Portfolio = () => {
    // const [allProjects, setAllProjects] = useState([]);

    // useEffect(() => {
    //     fetch('projects.json')
    //         .then(res => res.json())
    //         .then(data => setAllProjects(data))
    // }, [])

    // console.log(allProjects)
    return (
        <section id='portfolio' className='my-28'>
            <h2 className='text-center text-2xl font-bold text-cyan-300'>Portfolio</h2>
            <h3 className='text-center text-cyan-300 mb-10'>Most Recent Works</h3>
            <div >
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1 my-10 mx-20'>
                    {/* {
                        allProjects.length && allProjects.map(singleProject => <Projects
                            key={singleProject.id}
                            singleProject={singleProject}
                        >
                        </Projects>)
                    } */}
                    <div className="card card-compact w-80 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-200 ...">
                        <figure><img src={resala1} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Car Selling Website</h2>
                            <p className=''>Resala is a simple car resale and buy People can buy and sell his/her desire car.</p>
                            <div className=" flex justify-between">
                                <a href="https://resala-5b266.web.app/" className='btn btn-primary ' target='blank'>Live Demo</a>
                                <Link to="/resala" className='btn btn-accent'>View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-80 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ...">
                        <figure><img src={genox1} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">GenOx Web Technology</h2>
                            <p>GenOx web technology is a technology teaching platform. Where people can learn various types of technology.</p>
                            <div className="flex justify-between">
                                <a href="https://genox-web-technology.web.app/" className='btn btn-primary' target='blank'>Live Demo</a>
                                <Link to='/genox' className='btn btn-accent'>View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-80 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ...">
                        <figure><img src={quiz1} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Play online quiz</h2>
                            <p>Quiz hub is a quiz playing website. Where user can play quiz on various topics. Such as Github, JavaScript and many more.</p>
                            <div className="flex justify-between">
                                <a href="https://symphonious-bonbon-0b9c78.netlify.app/" className='btn btn-primary' target='blank'>Live Demo</a>
                                <Link to="/quizhub" className='btn btn-accent'>View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
import React, { useEffect, useState } from 'react';
import resala from '../../assets/projectImages/resala.png';
import genox from '../../assets/projectImages/genox.png';
import paradise from '../../assets/projectImages/paradise.png';

const Portfolio = () => {

    const [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <section id='portfolio' className='my-28'>
            {/* <p>{allProjects.length}</p> */}
            <h2 className='text-center text-2xl font-bold text-cyan-300'>Portfolio</h2>
            <h3 className='text-center text-cyan-300 mb-10'>Most Recent Works</h3>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 my-10 mx-20'>
                <div className="card card-compact w-80 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200 ...">
                    <figure><img src={resala} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Car Selling Website</h2>
                        <p className=''>Resala is a simple car resale and buy People can buy and sell his/her desire car.</p>
                        <div className=" flex justify-between">
                            <a href="https://resala-5b266.web.app/" className='btn btn-primary ' target='blank'>Live Demo</a>
                            <a href="" target='blank' className='btn btn-accent'>View Details</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                    <figure><img src={genox} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">GenOx Web Technology</h2>
                        <p>GenOx web technology is a technology teaching platform. Where people can learn various types of technology.</p>
                        <div className="flex justify-between">
                            <a href="https://genox-web-technology.web.app/" className='btn btn-primary' target='blank'>Live Demo</a>
                            <a href="" target='blank' className='btn btn-accent'>View Details</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                    <figure><img src={paradise} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Service Providing Website</h2>
                        <p>Paradise is a various service providing website. Where people may get various types of services.</p>
                        <div className="flex justify-between">
                            <a href="https://paradise-14be2.web.app/" className='btn btn-primary' target='blank'>Live Demo</a>
                            <a href="" target='blank' className='btn btn-accent'>View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
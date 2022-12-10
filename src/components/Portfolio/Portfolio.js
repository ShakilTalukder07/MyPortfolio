import React from 'react';
import resala from '../../assets/projectImages/resala.png';
import genox from '../../assets/projectImages/genox.png';
import paradise from '../../assets/projectImages/paradise.png';

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2 className='text-2xl font-bold text-center text-cyan-300'>Project ShowCase</h2>
            <h3 className='text-xl font-bold text-center text-cyan-300'>My Recent Work</h3>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 my-10 mx-20'>
                <div className="card card-compact w-80 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                    <figure><img src={resala} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Car Selling Website</h2>
                        <div className="card-actions justify-end">
                            <a href="https://resala-5b266.web.app/" className='btn btn-primary w-full' target='blank'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                    <figure><img src={genox} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">GenOx Web Technology</h2>
                        <div className="card-actions justify-end">
                            <a href="https://genox-web-technology.web.app/" className='btn btn-primary w-full' target='blank'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                    <figure><img src={paradise} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Service Providing Website</h2>
                        <div className="card-actions justify-end">
                            <a href="https://paradise-14be2.web.app/" className='btn btn-primary w-full' target='blank'>Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
import React from 'react';
import genox1 from '../../assets/projectImages/genox1.png';
import doctorsHome from '../../assets/projectImages/doctorsHome.png';
import newsPaper from '../../assets/projectImages/newsPaper.png';
import paradise from '../../assets/projectImages/paradise.png';
import autoTrader from '../../assets/projectImages/resala.png';
import eventManagement from "../../assets/projectImages/eventmart.png"

const Portfolio = () => {
   
    return (
        <section id='portfolio' className='my-28'>
            <h2 className='text-center text-2xl font-bold text-cyan-300'>Portfolio</h2>
            <h3 className='text-center text-cyan-300 mb-10'>Most Recent Works</h3>
            <div >
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 grid-cols-1 my-10 place-items-center'>
                    <div className="card card-compact mb-5 w-80 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...">
                        <figure><img src={eventManagement} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Event Management Website</h2>
                            <p className=''>EventMart is a simple event management website. People can booked or organize events.</p>
                            <div className=" flex justify-between">
                                <a href="https://event-app-pi.vercel.app/" className='btn btn-accent w-full mt-2' target='blank'>Live Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact mb-5 w-80 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...">
                        <figure><img src={autoTrader} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Car Selling Website</h2>
                            <p className=''>Auto trader is a simple car resale and buy website. People can buy and sell his/her desire car.</p>
                            <div className=" flex justify-between">
                                <a href="https://myautotrader.netlify.app/" className='btn btn-accent w-full mt-2' target='blank'>Live Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact mb-5 w-80 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...">
                        <figure><img src={doctorsHome} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Medical Treatment Website</h2>
                            <p className=''>Doctors Home is a treatment providing website. People can booked slot to get appointment.</p>
                            <div className=" flex justify-between">
                                <a href="https://doctors-portal-83d63.web.app/" className='btn btn-accent w-full mt-2' target='blank'>Live Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact mb-5 w-80 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...">
                        <figure><img src={paradise} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Service Selling Website</h2>
                            <p className=''>Paradise is a service providing website. People can take various services and provide reviews.</p>
                            <div className="flex justify-between">
                                <a href="https://paradise-14be2.web.app/" className='btn btn-accent w-full mt-2' target='blank'>Live Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact mb-5 w-80 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...">
                        <figure><img src={newsPaper} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Online News Portal</h2>
                            <p className=''>Secrets On Move is a online news portal. People can read various types of news here.</p>
                            <div className=" flex justify-between">
                                <a href="https://papaya-cranachan-30bce6.netlify.app/" className='btn btn-accent w-full mt-2' target='blank'>Live Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact mb-5 w-80 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 duration-300 ...">
                        <figure><img src={genox1} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">GenOx Web Technology</h2>
                            <p>GenOx web technology is a technology teaching platform. Where people can learn various types of technology.</p>
                            <div className="flex justify-between">
                                <a href="https://genox-web-technology.web.app/" className='btn btn-accent w-full mt-2' target='blank'>Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
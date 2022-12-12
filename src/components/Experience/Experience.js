import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience' className='my-10'>
            <h2 className='text-center text-2xl font-bold  text-cyan-300'>What Skills I Have</h2>
            <h3 className='text-center text-cyan-300'>My Experience</h3>
            <div className='flex flex-col sm:flex-row md:flex-row gap-6 justify-center mx-10 my-14'>
                <div className="card w-96 bg-cyan-900 hover:bg-blue-900 shadow-xl">
                    <div className="card-body">
                        <h2 className="font-bold text-center mb-4">FRONTEND DEVELOPMENT</h2>
                        <div className='grid grid-cols-2'>
                            <div>
                                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                                <h5>HTML</h5>
                                <small className='text-gray-400'>Experienced</small>
                            </div>
                            <div>
                                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                                <h5>CSS</h5>
                                <small className='text-gray-400'>Intermediate</small>
                            </div>
                            <div>
                                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                                <h5>Bootstrap</h5>
                                <small className='text-gray-400'>Experienced</small>
                            </div>
                            <div>
                                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                                <h5>Tailwind CSS</h5>
                                <small className='text-gray-400'>Experienced</small>
                            </div>
                            <div>
                                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                                <h5>JavaScript</h5>
                                <small className='text-gray-400'>Intermediate</small>
                            </div>
                            <div>
                                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                                <h5>React JS</h5>
                                <small className='text-gray-400'>Intermediate</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-cyan-900 hover:bg-blue-900 shadow-xl">
                    <div className="card-body">
                        <h2 className="font-bold text-center mb-4">BACKEND DEVELOPMENT</h2>
                        <div className='grid grid-cols-2'>
                            <div>
                                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                                <h5>Node JS</h5>
                                <small className='text-gray-400'>Intermediate</small>
                            </div>
                            <div>
                                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                                <h5>Express JS</h5>
                                <small className='text-gray-400'>Intermediate</small>
                            </div>
                            <div>
                                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                                <h5>Mongo DB</h5>
                                <small className='text-gray-400'>Intermediate</small>
                            </div>
                            <div>
                                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                                <h5>Firebase</h5>
                                <small className='text-gray-400'>Intermediate</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
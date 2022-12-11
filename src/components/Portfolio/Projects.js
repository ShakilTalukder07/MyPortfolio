import React from 'react';
import { Link } from 'react-router-dom';

const projects = ({ singleProject }) => {
    const { _id, home_img, title, liveSite } = singleProject
    return (
        <div className="card card-compact w-80 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...">
            <figure><img src={home_img} alt="" className='h-40 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className=''>Resala is a simple car resale and buy People can buy and sell his/her desire car.</p>
                <div className=" flex justify-between">
                    <a href={liveSite} className='btn btn-primary ' target='blank'>Live Demo</a>
                    <Link to={`/checkout/${_id}`} target='blank' className='btn btn-accent'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default projects;
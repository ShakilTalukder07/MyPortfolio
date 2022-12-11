import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { title, home_img, secondPage, thirdPage, description } = useLoaderData()
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={home_img} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                    <img src={secondPage} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                    <img src={thirdPage} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { title, home_img, secondPage, thirdPage, description, technology } = useLoaderData()
    return (
        <div>
            <div>
                <p className='mt-5 mx-10 font-semibold text-lg underline'>{title}</p>
                <div className="flex gap-2 my-12 mx-10 flex-col lg:flex-row">
                    <img src={home_img} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                    <img src={secondPage} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                    <img src={thirdPage} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                </div>
                <div>
                    <p className='my-5 mx-10'><span className='text-xl font-bold'>Project Details: </span>{description}</p>
                    <p className='mb-5 mx-10'><span className='text-xl font-bold'>Technology Used: </span> {technology}</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
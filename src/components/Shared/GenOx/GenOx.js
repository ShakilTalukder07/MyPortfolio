import React from 'react';
import genox1 from '../../../assets/projectImages/genox1.png';
import genox2 from '../../../assets/projectImages/genox2.png';
import genox3 from '../../../assets/projectImages/genox3.png';

const GenOx = () => {
    return (
        <div>
            <p className='my-5 mx-10 font-semibold text-lg underline'>Technology Tech Website</p>
            <div className="flex gap-2 flex-col lg:flex-row">
                <div className=''>
                    <div className="flex gap-2 flex-col lg:flex-row mx-10">
                        <img src={genox1} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                        <img src={genox2} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                        <img src={genox3} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                    </div>
                    <div>
                        <p className='my-5 mx-10'><span className='text-xl font-bold'>Project Features: </span>GenOx web technology is an online teaching-related website. Where a company sells various types of courses. Such as web development, App development, Database course, Backend technology, and many more. Various type of courses is available in a specific category. To buy a course users have to create an account. Users can download details of that course. Users can make payments for that course via card.</p>

                        <p className='mb-5 mx-10'><span className='text-xl font-bold'>Technology Used:
                        </span> React, React router dom, Javascript, Node.js, Express JS, MongoDB, Firebase, Stripe, TailwindCSS, CSS, Html</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenOx;
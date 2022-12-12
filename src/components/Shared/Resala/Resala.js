import React from 'react';
import resala3 from '../../../assets/projectImages/resaala_home.png';
import resala2 from '../../../assets/projectImages/all_sellers.png';
import resala1 from '../../../assets/projectImages/resala.png';

const Resala = () => {
    return (
        <div>
            <p className='my-5 mx-10 font-semibold text-lg underline'>Car Selling Website</p>
            <div className="flex gap-2 flex-col lg:flex-row">
                <div className=''>
                    <div className="flex gap-2 flex-col lg:flex-row mx-10">
                        <img src={resala1} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                        <img src={resala2} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                        <img src={resala3} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                    </div>
                    <div>
                        <p className='my-5 mx-10'><span className='text-xl font-bold'>Project Features: </span>RESALA, is a resale car sell and buying website. User can buy and sells his/her desired car. Users can create accounts as a buyer or sellers. Buyers can purchase products and pay for that products via card. The seller can add a product for sale. He can mark a product as it is available or sold. If the product is available, he can advertise that product on the home page. The admin role is also functional on this website, the admin can control all types of activity. Admin can delete a buyer or seller. He can also verify a seller.</p>

                        <p className='mb-5 mx-10'><span className='text-xl font-bold'>Technology Used:
                        </span> React, React router dom, Javascript, Node.js, Express JS, MongoDB, Firebase, Stripe, TailwindCSS, CSS, Html</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resala;
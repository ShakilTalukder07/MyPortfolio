import React from 'react';
import doctorsHome1 from '../../../assets/projectImages/doctorsHome2.png';
import doctorsHome2 from '../../../assets/projectImages/doctorsHome3.png';
import doctorsHome3 from '../../../assets/projectImages/doctorsHome4.png';

const DoctorsHome = () => {
    return (
        <div id='doctorsHome'>
        <p className='my-5 mx-10 font-semibold text-lg underline'>Treatment providing Website</p>
        <div className="flex gap-2 flex-col lg:flex-row">
            <div>
                <div className="flex gap-2 flex-col lg:flex-row mx-10">
                    <img src={doctorsHome1} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                    <img src={doctorsHome2} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                    <img src={doctorsHome3} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                </div>
                <div>
                    <p className='my-5 mx-10'><span className='text-xl font-bold'>Project Features: <br /> </span> <br />
                    1. RESALA, is a fully responsive web application. <br />
                    2. Here, Users can create accounts as a buyer or sellers. <br />
                    3. Buyers can purchase products and pay for that products via card. <br />
                    4. The seller can add a product for sale. He can mark a product as it is available or sold. If the product is available, he can advertise that product on the home page. <br />
                    5. The admin role is also available on this website, the admin can control all types of activity. Admin can delete a buyer or seller. He can also verify a seller. 
                    </p>

                    <p className='mb-5 mx-10'><span className='text-xl font-bold'>Technology Used:
                    </span> React, React router dom, Javascript, Node.js, Express JS, MongoDB, Firebase, Stripe, TailwindCSS, CSS, Html</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DoctorsHome;
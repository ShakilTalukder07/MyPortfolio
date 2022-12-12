// import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import Loading from '../Shared/Loading/Loading';


// const Checkout = () => {
//     const [loading, setLoading] = useState(true)
//     const [projectData, setProjectData] = useState([])
//     const { title, home_img, secondPage, thirdPage, description, technology } = useLoaderData()
//     // console.log(data);

//     // title, home_img, secondPage, thirdPage, description, technology

//     useEffect(() => {
//         fetch(`projects.json`)
//             .then(res => res.json())
//             .then(data => setProjectData(data))
//     }, [])

//     console.log(projectData);

//     // if (loading) {
//     //     return <Loading></Loading>
//     // }

//     return (
//         <div>
//             <div>
//                 <p className='mt-5 mx-10 font-semibold text-lg underline'>{title}</p>
//                 <div className="flex gap-2 my-12 mx-10 flex-col lg:flex-row">
//                     <img src={home_img} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
//                     <img src={secondPage} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
//                     <img src={thirdPage} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
//                 </div>
//                 <div>
//                     <p className='my-5 mx-10'><span className='text-xl font-bold'>Project Details: </span>{description}</p>
//                     <p className='mb-5 mx-10'><span className='text-xl font-bold'>Technology Used: </span> {technology}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Checkout;
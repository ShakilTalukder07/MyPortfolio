import React from 'react';
import Resume from '../../assets/resume/Shakil_Talukder_Resume.pdf'

const CTA = () => {
    return (
        <div className='flex gap-2 m-2 my-3'>
            <a href={Resume} download className='p-3 rounded-lg bg-[#303640] text-sky-500 font-semibold shadow-2xl text-xs md:text-sm lg:text-sm'>Get Resume</a>
            <a href="#contact" className='p-3 rounded-lg bg-white text-sky-500 font-semibold shadow-2xl text-xs md:text-sm lg:text-sm'>Let's Talk</a>
        </div>
    );
};

export default CTA;
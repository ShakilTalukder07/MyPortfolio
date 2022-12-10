import React from 'react';
import Resume from '../../assets/resume/Shakil_Talukder_Resume.pdf'

const CTA = () => {
    return (
        <div className='flex gap-2 m-2 my-3'>
            <a href={Resume} download className='btn text-sky-500 shadow-2xl'>Get Resume</a>
            <a href="#contact" className='btn bg-white text-sky-500 shadow-2xl'>Let's Talk</a>
        </div>
    );
};

export default CTA;
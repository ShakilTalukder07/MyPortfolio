import React from 'react';
import Resume from '../../assets/resume/Shakil_Talukder_Resume.pdf'

const CTA = () => {
    return (
        <div className='flex gap-2 m-2 my-3'>
            <a href={Resume} download className='btn'>Get Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    );
};

export default CTA;
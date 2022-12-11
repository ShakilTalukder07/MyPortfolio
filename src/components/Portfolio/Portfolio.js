import React, { useEffect, useState } from 'react';
import Projects from './Projects';

const Portfolio = () => {
    const [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        fetch('https://my-portfolio-server-navy.vercel.app/projects')
            .then(res => res.json())
            .then(data => setAllProjects(data))
    }, [])

    console.log(allProjects)
    return (
        <section id='portfolio' className='my-28'>
            <h2 className='text-center text-2xl font-bold text-cyan-300'>Portfolio</h2>
            <h3 className='text-center text-cyan-300 mb-10'>Most Recent Works</h3>
            <div >
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 my-10 mx-20'>
                    {
                        allProjects.length && allProjects.map(singleProject => <Projects
                            key={singleProject._id}
                            singleProject={singleProject}
                        >
                        </Projects>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
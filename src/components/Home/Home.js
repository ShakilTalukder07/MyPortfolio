import React from 'react';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
// import Service from '../Service/Service';
import Experience from '../Experience/Experience';
import About from '../About/About';
// import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Experience></Experience>
            {/* <Service></Service> */}
            <Portfolio></Portfolio>
            {/* <Testimonials></Testimonials> */}
            <Contact></Contact>
        </div>
    );
};

export default Home;
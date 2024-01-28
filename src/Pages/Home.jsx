import React from 'react'


import Services from '../Components/ServicesSection';
import About from '../Components/AboutSection'
import LatestProject from '../Components/LatestProject';
import TestimonialsSection from '../Components/TestimonialsSection';
import LatestBlogs from '../Components/LatestBlogs';

const Home = () => {
    return (
        <>
            <About />
            <Services />
            <LatestProject/>
            <TestimonialsSection/>
            <LatestBlogs/>
        </>
    )
}

export default Home
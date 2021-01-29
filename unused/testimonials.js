import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TestimonialsCaed from '../components/Testimonials/TestimonialsCaed';
import Footer from '../components/_App/Footer';

const Testimonials = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Testimonials" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Testimonials" 
                imgClass="bg-22" 
            />    
            <TestimonialsCaed />
            <Footer />
        </React.Fragment>
    )
}

export default Testimonials;
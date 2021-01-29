import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import GoogleMap from '../components/Contact/GoogleMap';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/_App/Footer';

const Contact = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Contact Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact Us" 
                imgClass="bg-2" 
            />    
            <GoogleMap />
            <ContactForm />
            <Footer />
        </React.Fragment>
    )
}

export default Contact;
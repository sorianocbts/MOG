import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/Faq/FaqContent';
import Footer from '../components/_App/Footer';

const Faq = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Faq" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Faq" 
                imgClass="bg-3"
            />    
            <FaqContent />
            <Footer />
        </React.Fragment>
    )
}

export default Faq;
import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PortfolioDetailsContent from '../components/PortfolioDetails/PortfolioDetailsContent';
import Footer from '../components/_App/Footer';

const PortfolioDetails = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Portfolio Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio Details" 
                imgClass="bg-8" 
            />    
            <PortfolioDetailsContent />
            <Footer />
        </React.Fragment>
    )
}

export default PortfolioDetails;
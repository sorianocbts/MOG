import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PortfolioCard from '../components/PortfolioColumnsFour/PortfolioCard';
import Footer from '../components/_App/Footer';

const PortfolioColumnsFour = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Portfolio Columns Four" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio Columns Four" 
                imgClass="bg-19" 
            />    
            <PortfolioCard />
            <Footer />
        </React.Fragment>
    )
}

export default PortfolioColumnsFour;
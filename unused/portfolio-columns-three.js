import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PortfolioCard from '../components/PortfolioColumnsThree/PortfolioCard';
import Footer from '../components/_App/Footer';

const PortfolioColumnsThree = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Portfolio Columns Three" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio Columns Three" 
                imgClass="bg-17" 
            />    
            <PortfolioCard />
            <Footer />
        </React.Fragment>
    )
}

export default PortfolioColumnsThree;
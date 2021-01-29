import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent';
import FunFacts from '../components/About/FunFacts';
import WeProvideServices from '../components/About/WeProvideServices';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import AwardWinningMovies from '../components/Common/AwardWinningMovies';
import ContactWithUs from '../components/Common/ContactWithUs';
import PartnersStyleThree from '../components/Common/PartnersStyleThree';
import Footer from '../components/_App/Footer';

const About = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="About" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About" 
                imgClass="bg-1" 
            />    
            <AboutContent />
            <FunFacts />
            <WeProvideServices />
            <TeamStyleTwo />
            <div className="bg-color">
                <AwardWinningMovies />
            </div>
            <ContactWithUs />
            <PartnersStyleThree />
            <Footer />
        </React.Fragment>
    )
}

export default About;
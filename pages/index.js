import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeThree/MainBanner';
import About from '../components/HomeThree/About';
import VideoCreated from '../components/HomeThree/VideoCreated';
import Testimonials from '../components/HomeThree/Testimonials';
import UpcomingMovies from '../components/HomeThree/UpcomingMovies';
import WhatWeDo from '../components/HomeThree/WhatWeDo';
import TeamMember from '../components/HomeThree/TeamMember';
import ProductionProcess from '../components/HomeThree/ProductionProcess';
import LatestNews from '../components/HomeThree/LatestNews';
import Partners from '../components/Common/Partners';
import AwardWinningMovies from '../components/HomeThree/AwardWinningMovies';
import Footer from '../components/_App/Footer';

const Index3 = () => {
    return (
        <React.Fragment>
            <Navbar />
            <MainBanner />
            {/* <About /> */}
            {/* <VideoCreated /> */}
            {/* <Testimonials /> */}
            {/* <UpcomingMovies /> */}
            {/* <WhatWeDo /> */}
            {/* <TeamMember /> */}
            {/* <ProductionProcess /> */}
            {/* <AwardWinningMovies /> */}
            {/* <LatestNews /> */}
            {/* <Partners /> */}
            <Footer />
        </React.Fragment>
    )
}

export default Index3;
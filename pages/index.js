import React from 'react';
import axios from 'axios';
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
import VideoAccordion from '../components/HomeThree/VideoAccordion';
import ContactForm from '../components/HomeThree/ContactForm';
import { server } from '../config';
import NowPlaying from '../components/HomeThree/NowPlaying';
import NowPlaying2 from '../components/HomeThree/NowPlaying2';
import SubscribeModal, { DelayedRender } from '../components/HomeThree/SubscribeModal';

export async function getServerSideProps(context) {
    const res = await axios(`${server}/api/youtube`)
    const data = await res.data
    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            data,
        },
    }
}
const Index3 = ({ data }) => {

    const [modalShow, setModalShow] = React.useState(true);
    return (
        <React.Fragment>
            <Navbar />
            <DelayedRender delay={5000}>
                <SubscribeModal show={modalShow} onHide={() => setModalShow(false)} />
            </DelayedRender>
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
            <NowPlaying2 data={data} />
            {/* <NowPlaying data={data} /> */}
            <VideoAccordion data={data} />
            <ContactForm />
            <Footer />
        </React.Fragment>
    )
}

export default Index3;
import React from 'react';
import axios from 'axios';
import Navbar from '../components/_App/Navbar';
// import MainBanner from '../components/HomeThree/MainBanner';
import Footer from '../components/_App/Footer';
// import VideoAccordion from '../components/HomeThree/VideoAccordion';
// import ContactForm from '../components/HomeThree/ContactForm';
import { server } from '../config';
// import NowPlaying from '../components/HomeThree/NowPlaying';
// import SubscribeModal, { DelayedRender } from '../components/HomeThree/SubscribeModal';
import AnchorPlaylist from '../components/HomeThree/AnchorPlaylist';


export async function getServerSideProps(context) {
    const res = await axios(`${server}/api/anchor`)
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
            {/* <DelayedRender delay={5000}>
                <SubscribeModal show={modalShow} onHide={() => setModalShow(false)} />
            </DelayedRender> */}
            {/* <MainBanner /> */}
            {/* <NowPlaying data={data} /> */}
            {/* <VideoAccordion data={data} /> */}
            <AnchorPlaylist data={data} />
            {/* <ContactForm /> */}
            <Footer />
        </React.Fragment>
    )
}

export default React.memo(Index3);
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/_App/Navbar'
import HeroSlider from '../components/HomeTwo/HeroSlider'
import WhatWeDo from '../components/HomeTwo/WhatWeDo'
import About from '../components/HomeTwo/About'
import Services from '../components/HomeTwo/Services'
import VideoArea from '../components/HomeTwo/VideoArea'
import UpcomingMovies from '../components/HomeTwo/UpcomingMovies'
import TeamStyleTwo from '../components/Common/TeamStyleTwo'
import TestimonialsTwo from '../components/Common/TestimonialsTwo'
import ExclusiveShop from '../components/HomeTwo/ExclusiveShop'
import LatestNewsStyleTwo from '../components/DefaultHome/LatestNewsStyleTwo'
import PartnersStyleTwo from '../components/Common/PartnersStyleTwo'
import Footer from '../components/_App/Footer'

const Index2 = () => {
    const products = useSelector((state) => state.products)
    return (
        <React.Fragment>
            <Navbar />
            <HeroSlider />
            <WhatWeDo />
            <About />
            <Services />
            <VideoArea /> 
            <UpcomingMovies />
            <TeamStyleTwo />
            <TestimonialsTwo />
            <ExclusiveShop products={products.slice(0, 4)} />
            <LatestNewsStyleTwo /> 
            <PartnersStyleTwo />
            <Footer />
        </React.Fragment>
    )
}

export default Index2;
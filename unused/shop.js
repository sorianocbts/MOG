import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/_App/Navbar'
import PageBanner from '../components/Common/PageBanner'
import ShopContent from '../components/Shop/ShopContent'
import Footer from '../components/_App/Footer'

const Shop = () => {
    const products = useSelector((state) => state.products)
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Shop" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Shop" 
                imgClass="bg-9" 
            />    

            <ShopContent products={products} />

            <Footer />
        </React.Fragment>
    )
}

export default Shop
import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Navbar from '../../components/_App/Navbar'
import PageBanner from '../../components/Common/PageBanner'
import ProductDetailsContent from '../../components/ProductDetails/ProductDetailsContent'
import ProductsDetailsTab from '../../components/ProductDetails/ProductsDetailsTab'
import RelatedProducts from '../../components/ProductDetails/RelatedProducts'
import Footer from '../../components/_App/Footer'

const productDetails = () => {
    const router = useRouter()
    const products = useSelector((state) => state.products)
    const id = router.query.id
    const product = products.find(p => p.id === id)
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Product Details"
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Product Details" 
                imgClass="bg-12" 
            />    

            <section className="product-details-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Product Details Content */}
                        <ProductDetailsContent {...product} />

                        {/* Products Details Tab */}
                        <ProductsDetailsTab {...product} />
                    </div>
                </div>
            </section>

            <RelatedProducts products={products.slice(0, 6)} />
 
            <Footer />
        </React.Fragment>
    )
}

export default productDetails

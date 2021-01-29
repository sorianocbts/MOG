import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import AddToCart from '../Shop/AddToCart'

const options = {
    loop:true,
    margin: 30,
    nav:false,
    mouseDrag: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
        },
        414:{
            items:2,
        },
        768:{
            items:3,
        },
        992:{
            items:5,
        }
    }
};

const RelatedProducts = ({ products }) => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="pb-100">
			<div className="container">
                <div className="section-title">
					<h2>Related Products</h2>
				</div>

                {display ? <OwlCarousel 
                    className="related-products owl-carousel owl-theme"
                    {...options}
                > 

                    {products.map(product => (
                        <div className="single-shop" key={product.id}>
                            <div className="shop-img">
                                <img src={product.image} alt="Image" />

                                <AddToCart {...product} />
                            </div>

                            <h3>
                                <Link href="/product/[id]" as={`/product/${product.id}`}>
                                    <a>{product.title}</a>
                                </Link>
                            </h3>
                            <span>${product.price}</span>
                        </div>
                    ))}
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default RelatedProducts;
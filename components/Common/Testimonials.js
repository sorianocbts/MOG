import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin: 30,
    nav:false,
    mouseDrag: true,
    items:1,
    dots: true,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="testimonial-area ptb-100">
			<div className="container">
                {display ? <OwlCarousel 
                    className="testimonial-wrap owl-carousel owl-theme"
                    {...options}
                >
					<div className="testimonial-content">
						<i className="flaticon-quotation"></i>
						<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.”</p>
						
						<h3>Kara Goldberg</h3>
						<span>Director of Festwork</span>
					</div>

					<div className="testimonial-content">
						<i className="flaticon-quotation"></i>
						<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.”</p>
						
						<h3>Kara Goldberg</h3>
						<span>Director of Festwork</span>
					</div>

					<div className="testimonial-content">
						<i className="flaticon-quotation"></i>
						<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.”</p>
						
						<h3>Kara Goldberg</h3>
						<span>Director of Festwork</span>
					</div>
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default Testimonials;
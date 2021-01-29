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
    autoplayHoverPause: true,
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="testimonial-area-three bg-color-two pb-100">
			<div className="container">
                {display ? <OwlCarousel 
                    className="testimonial-wrap-three owl-carousel owl-theme"
                    {...options}
                >
					<div className="testimonial-text">
						<img src="/img/clients/client1.jpg" alt="Image" />
						<i className="flaticon-quotation"></i>
						<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”</p>
						
						<h3>Kara Goldberg</h3>
						<span>Director of Festwork</span>
					</div>

					<div className="testimonial-text">
						<img src="/img/clients/client2.jpg" alt="Image" />
						<i className="flaticon-quotation"></i>
						<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”</p>
						
						<h3>Richard Romero</h3>
						<span>Director</span>
					</div>

					<div className="testimonial-text">
						<img src="/img/clients/client3.jpg" alt="Image" />
						<i className="flaticon-quotation"></i>
						<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”</p>
						
						<h3>Kara Goldberg</h3>
						<span>Director of Festwork</span>
					</div>
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default Testimonials;
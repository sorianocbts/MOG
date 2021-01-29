import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin: 30,
    nav:false,
    mouseDrag: true,
    items:1,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:3,
        },
        576:{
            items:4,
        },
        768:{
            items:4,
        },
        992:{
            items:6,
        },
        1200:{
            items:6,
        }
    }
};

const PartnersStyleThree = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="partner-wrap bg-color ptb-100">
			<div className="container">
                {display ? <OwlCarousel 
                    className="partner-wrap owl-carousel owl-theme"
                    {...options}
                > 
					<div className="partner-item">
						<a href="#" target="_blank">
							<img src="/img/partners/partner7.png" alt="Image" />
						</a>
					</div>

					<div className="partner-item">
						<a href="#" target="_blank">
							<img src="/img/partners/partner8.png" alt="Image" />
						</a>
					</div>

					<div className="partner-item">
						<a href="#" target="_blank">
							<img src="/img/partners/partner9.png" alt="Image" />
						</a>
					</div>

					<div className="partner-item">
						<a href="#" target="_blank">
							<img src="/img/partners/partner10.png" alt="Image" />
						</a>
					</div>

					<div className="partner-item">
						<a href="#" target="_blank">
							<img src="/img/partners/partner11.png" alt="Image" />
						</a>
					</div>

					<div className="partner-item">
						<a href="#" target="_blank">
							<img src="/img/partners/partner12.png" alt="Image" />
						</a>
					</div>
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default PartnersStyleThree;
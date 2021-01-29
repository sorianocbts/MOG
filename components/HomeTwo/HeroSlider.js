import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Link from 'next/link';

const options = {
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: false,
    items: 1,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-left-arrow-alt'></i>",
        "<i class='bx bx-right-arrow-alt'></i>",
    ],
};

const HeroSlider = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="hero-slider-area-two">
            {display ? <OwlCarousel 
                className="hero-slider-wrap-two owl-carousel owl-theme"
                {...options}
            >
				<div className="hero-slider-item bg-4">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="hero-slider-text">
									<ul>
										<li>
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand1.png" alt="Image" />
                                                    <div className="white-logo">
                                                        <img src="/img/brand/white-brand1.png" alt="Image" />
                                                    </div>
                                                </a>
                                            </Link>
										</li>
										<li>
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand2.png" alt="Image" />
                                                    <div className="white-logo">
                                                        <img src="/img/brand/white-brand2.png" alt="Image" />
                                                    </div>
                                                </a>
                                            </Link>
										</li>
										<li>
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand3.png" alt="Image" />
                                                    <div className="white-logo">
                                                        <img src="/img/brand/white-brand3.png" alt="Image" />
                                                    </div>
                                                </a>
                                            </Link>
										</li>
									</ul>

									<h1>Video Solution For Every Stage</h1>
									<p>Vivi is a high-quality video production house!</p>
		
									<div className="slider-btn">
                                        <Link href="#">
                                            <a className="default-btn">View More</a>
                                        </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="hero-slider-item bg-5">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="hero-slider-text">
                                    <ul>
										<li>
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand1.png" alt="Image" />
                                                    <div className="white-logo">
                                                        <img src="/img/brand/white-brand1.png" alt="Image" />
                                                    </div>
                                                </a>
                                            </Link>
										</li>
										<li>
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand2.png" alt="Image" />
                                                    <div className="white-logo">
                                                        <img src="/img/brand/white-brand2.png" alt="Image" />
                                                    </div>
                                                </a>
                                            </Link>
										</li>
										<li>
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand3.png" alt="Image" />
                                                    <div className="white-logo">
                                                        <img src="/img/brand/white-brand3.png" alt="Image" />
                                                    </div>
                                                </a>
                                            </Link>
										</li>
									</ul>

									<h1>Excellent Ideas Brilliantly Done</h1>
									<p>Vivi is a high-quality video production house!</p>
		
									<div className="slider-btn">
                                        <Link href="#">
                                            <a className="default-btn">View More</a>
                                        </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="hero-slider-item bg-6">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="hero-slider-text">
                                    <ul>
										<li>
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand1.png" alt="Image" />
                                                    <div className="white-logo">
                                                        <img src="/img/brand/white-brand1.png" alt="Image" />
                                                    </div>
                                                </a>
                                            </Link>
										</li>
										<li>
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand2.png" alt="Image" />
                                                    <div className="white-logo">
                                                        <img src="/img/brand/white-brand2.png" alt="Image" />
                                                    </div>
                                                </a>
                                            </Link>
										</li>
										<li>
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand3.png" alt="Image" />
                                                    <div className="white-logo">
                                                        <img src="/img/brand/white-brand3.png" alt="Image" />
                                                    </div>
                                                </a>
                                            </Link>
										</li>
									</ul>

									<h1>Imagine Your Business Has Its Own Studio</h1>
									<p>Vivi is a high-quality video production house!</p>
		
									<div className="slider-btn">
                                        <Link href="#">
                                            <a className="default-btn">View More</a>
                                        </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </OwlCarousel> : ''}
			 
			{/* Start Social Wrap */}
			<div className="social-wrap">
				<ul>
					<li>
						<a href="#" target="_blank">
							<i className="bx bxl-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<i className="bx bxl-instagram"></i>
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<i className="bx bxl-facebook"></i>
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<i className="bx bxl-youtube"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
    )
}

export default HeroSlider;
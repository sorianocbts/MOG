import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin: 0,
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
        576:{
            items:2,
        },
        768:{
            items:3,
        },
        992:{
            items:4,
        },
        1200:{
            items:5,
        }
    }
};

const TeamStyleOne = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <section className="team-area bg-color ptb-100">
			<div className="container-fluid p-0">
				<div className="section-title">
					<span>Film Makers</span>
					<h2>Meet The Team</h2>
				</div>

                {display ? <OwlCarousel 
                    className="team-wrap owl-carousel owl-theme"
                    {...options}
                >
					<div className="single-team">
						<div className="team-img">
							<img src="/img/team/team1.jpg" alt="Image" />

							<ul className="social">
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
							</ul>
						</div>
						
						<div className="team-content">
							<h3>Phyllis Trimble</h3>
							<span>Director, Producer</span>
						</div>
					</div>
					
					<div className="single-team">
						<div className="team-img">
                            <img src="/img/team/team2.jpg" alt="Image" />

							<ul className="social">
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
							</ul>
						</div>

						<div className="team-content">
							<h3>Lorna Smith</h3>
							<span>Movie Editor</span>
						</div>
					</div>

					<div className="single-team">
						<div className="team-img">
                            <img src="/img/team/team3.jpg" alt="Image" />

							<ul className="social">
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
							</ul>
						</div>

						<div className="team-content">
							<h3>Eldon B. Rice</h3>
							<span>Movie Composer</span>
						</div>
					</div>

					<div className="single-team">
						<div className="team-img">
                            <img src="/img/team/team4.jpg" alt="Image" />

							<ul className="social">
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
							</ul>
						</div>

						<div className="team-content">
							<h3>Mike Tucker</h3>
							<span>Cinematographer</span>
						</div>
					</div>

					<div className="single-team">
						<div className="team-img">
                            <img src="/img/team/team5.jpg" alt="Image" />

							<ul className="social">
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
							</ul>
						</div>

						<div className="team-content">
							<h3>Emma Wilson</h3>
							<span>Movie Director</span>
						</div>
					</div>
                </OwlCarousel> : ''}
			</div>
		</section>
    )
}

export default TeamStyleOne;
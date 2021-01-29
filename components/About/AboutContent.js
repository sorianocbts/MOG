import React from 'react';

const AboutContent = () => {
    return (
        <div className="about-area-two bio-data ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-content">
							<span>vivi Bio</span>
							<h2>We Are A Creative Video Production Company</h2>

							<h3>Who We Are</h3>
							<p>Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production: production, pre-production and post-production.</p>

							<h3 className="mt-30">Who We Work</h3>
							<p>Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production.</p>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-6 col-sm-6 p-0">
								<div className="about-grid-img">
									<img src="/img/about-grid/about-grid1.jpg" alt="Image" />
								</div>
							</div>

							<div className="col-lg-6 col-sm-6 p-0">
								<div className="about-grid-img">
									<img src="/img/about-grid/about-grid2.jpg" alt="Image" />
								</div>
							</div>

							<div className="col-lg-6 col-sm-6 p-0">
								<div className="about-grid-img r-sm mb-0">
									<img src="/img/about-grid/about-grid3.jpg" alt="Image" />
								</div>
							</div>

							<div className="col-lg-6 col-sm-6 p-0">
								<div className="about-grid-img mb-0">
									<img src="/img/about-grid/about-grid4.jpg" alt="Image" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutContent;
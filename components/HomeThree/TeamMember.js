import React from 'react';
import Link from 'next/link';

const TeamMember = () => {
    return (
        <section className="team-area-three pt-100 pb-70 jarallax">
			<div className="container">
				<div className="section-title white-title">
					<span>FilmMakers</span>
					<h2>Meet The Team</h2>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
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
					</div>
					
					<div className="col-lg-4 col-sm-6">
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
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
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
								<span>Movie Composer</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default TeamMember;
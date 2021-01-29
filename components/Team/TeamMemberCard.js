import React from 'react';
import Link from 'next/link';

const TeamMemberCard = () => {
    return (
        <div className="team-area-two pt-100 pb-70">
			<div className="container">
				<div className="section-title">
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

					<div className="col-lg-4 col-sm-6">
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
								<h3>ELDON B. RICE</h3>
								<span>Movie Composer</span>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
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
								<h3>MIKE TUCKER</h3>
								<span>Cinematographer</span>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
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
								<h3>EMMA WILSON</h3>
								<span>Movie Director</span>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-team">
							<div className="team-img">
								<img src="/img/team/team6.jpg" alt="Image" />
	
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
								<h3>EMMA WILSON</h3>
								<span>Movie Director</span>
							</div>
						</div>
					</div>

					<div className="col-lg-12 col-sm-12">
						<div className="pagination-area text-center">
							<Link href="#">
								<a className="prev page-numbers">
									<i className="bx bx-chevron-left"></i>
								</a>
							</Link>
							
                            <span className="page-numbers current">1</span>

							<Link href="#">
                           	 	<a className="page-numbers">2</a>
							</Link>

							<Link href="#">
                            	<a className="page-numbers">3</a>
							</Link>

							<Link href="#">
								<a className="page-numbers">4</a>
							</Link>
							
							<Link href="#">
								<a className="next page-numbers">
									<i className="bx bx-chevron-right"></i>
								</a>
							</Link>
                        </div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default TeamMemberCard;
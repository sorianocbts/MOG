import React from 'react';
import Link from 'next/link';

const WhatWeDo = () => {
    return (
        <div className="what-we-do-area pt-100 pb-70">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="what-we-do-content"> 
							<span>What We Do</span>
							<h2>Video Solution Every Stage</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p> 

							<div className="brand-wrap">
								<div className="row">
									<div className="col-lg-4 col-sm-6 col-md-4">
										<div className="brand">
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand1.png" alt="Image" />
                                                </a>
                                            </Link>
										</div>
									</div>
	
									<div className="col-lg-4 col-sm-6 col-md-4">
										<div className="brand">
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand2.png" alt="Image" />
                                                </a>
                                            </Link>
										</div>
									</div>
	
									<div className="col-lg-4 col-sm-6 col-md-4 offset-sm-3 offset-md-0">
										<div className="brand">
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand3.png" alt="Image" />
                                                </a>
                                            </Link>
										</div>
									</div>
								</div>
							</div>

                            <Link href="/contact">
                                <a className="default-btn">
                                    Contact Us
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-6 col-sm-6">
								<div className="what-we-do-item mt-30">
									<i className="flaticon-film-editing-1"></i>
									<h3>Pre-Production</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="what-we-do-item">
									<i className="flaticon-film-editing"></i>
									<h3>Production</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="what-we-do-item">
									<i className="flaticon-advertising"></i>
									<h3>Post-Production</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="what-we-do-item mt-mince-30">
									<i className="flaticon-movie"></i>
									<h3>Conversion</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default WhatWeDo;
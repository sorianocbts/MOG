import React from 'react';
import Link from 'next/link';

const LatestNewsStyleTwo = () => {
    return (
        <div className="blog-area-two bg-color ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">News Feeds</span>
					<h2>Get The Latest News</h2>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<div className="single-blog bg-1">
							<div className="blog-content">
								<ul>
									<li>
										<i className="flaticon-user"></i>
                                        <Link href="#"><a>Admin</a></Link>
									</li>
									<li>
										<i className="flaticon-calendar"></i>
										17/07/2020
									</li>
								</ul>

                                <Link href="/blog-details">
                                    <a>
                                        <h3>Video Production Services Your Business Must Have</h3>
                                    </a>
                                </Link>

                                <Link href="/blog-details">
                                    <a className="read-more">
                                        Learn More
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="single-blog">
                            <Link href="/blog-details">
                                <a>
                                    <img src="/img/blog/blog5.jpg" alt="Image" />
                                </a>
                            </Link>
						
							<div className="blog-content">
								<ul>
									<li>
										<i className="flaticon-user"></i>
										<Link href="#"><a>Admin</a></Link>
									</li>
									<li>
										<i className="flaticon-calendar"></i>
										17/07/2020
									</li>
								</ul>

                                <Link href="/blog-details">
                                    <a>
                                        <h3>Why You Need To Hire Top className Video Production</h3>
                                    </a>
                                </Link>

								<Link href="/blog-details">
                                    <a className="read-more">
                                        Learn More
                                    </a>
                                </Link>
							</div>
						</div>

						<div className="single-blog mb-0">
                            <Link href="/blog-details">
                                <a>
                                    <img src="/img/blog/blog6.jpg" alt="Image" />
                                </a>
                            </Link>
						
							<div className="blog-content">
								<ul>
									<li>
										<i className="flaticon-user"></i>
										<Link href="#"><a>Admin</a></Link>
									</li>
									<li>
										<i className="flaticon-calendar"></i>
										17/07/2020
									</li>
								</ul>

                                <Link href="/blog-details">
                                    <a>
                                        <h3>Choosing A Video Location For Your Next Project</h3>
                                    </a>
                                </Link>

								<Link href="/blog-details">
                                    <a className="read-more">
                                        Learn More
                                    </a>
                                </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default LatestNewsStyleTwo;
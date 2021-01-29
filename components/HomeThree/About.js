import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div className="about-area-two three bg-color-two ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Vivi Bio</span>
                            <h2>We Are A Creative Video Production Company</h2>
                            <p>Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production: production, pre-production and post-production the images are digitally recorded instead of film stock producing</p>

                            <Link href="/about">
                                <a className="default-btn three">
                                    Learn More
                                </a>
                            </Link>
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
                                <div className="about-grid-img m-rs mb-0">
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

export default About;
import React from 'react';
import Link from 'next/link';
import Comments from './Comments';

const BlogDetailsContent = () => {
    return (
        <div className="blog-details-wrap">
            <div className="blog-top-content-wrap">
                <img src="/img/blog-details/details-img.jpg" alt="Image" />

                <ul className="post-details">
                    <li>
                        <i className="bx bx-user"></i>
                        By Admin
                    </li>
                    <li>
                        <i className="bx bx-calendar"></i>
                        06/21/2020
                    </li>
                    <li>
                        <i className="bx bx-comment"></i>
                        No Comments
                    </li>
                </ul>

                <h3>Video Production Services Your Business Must Have</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                
                <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accus amet justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet justo duo dolores.</p>

                <blockquote>
                    <i className="flaticon-quote"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus ratione cupiditate impedit nihil natus? Excepturi, totam perspiciatis magni, officiis reiciendis adipisci, nobis sint neque optio ut perferendis praesentium vitae amet consectetur adipisicing.</p>
                </blockquote>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet consectetur adipiscing.</p>
            </div>

            <div className="tags-and-shear-wrap">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <ul className="tag-list">
                            <li>
                                <span>Tags:</span>
                            </li>
                            <li>
                                <Link href="#"><a>Actir</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Cinema</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Director</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Production</a></Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-md-5">
                        <ul className="social-wrap">
                            <li>
                                <span>Follow Us:</span>
                            </li>
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
            </div>

            <div className="post-next-and-prev-wrap">
                <div className="row">
                    <div className="col-6">
                        <div className="prev-img">
                            <Link href="#">
                                <a>
                                    <img src="/img/blog-details/prev-img.jpg" alt="Image" />
                                    <h3>Prev Post</h3>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="next-img">
                            <Link href="#">
                                <a>
                                    <img src="/img/blog-details/next-img.jpg" alt="Image" />
                                    <h3>Next Post</h3>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comments & Comments Form */}
            <Comments />
        </div>
    )
}

export default BlogDetailsContent;
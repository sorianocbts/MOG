import React from 'react';
import Link from 'next/link';

const ShopSidebar = () => {
    return (
        <div className="sidebar-wrap">
            <div className="search-wrap sidebar-widget">
                <form className="search-form">
                    <input className="form-control" name="search" placeholder="SEARCH" type="text" />
                    <button className="search-button" type="submit">
                        <i className="bx bx-search"></i>
                    </button>
                </form>	
            </div>

            <div className="categories-wrap sidebar-widget">
                <h3>Categories</h3>
                <ul>
                    <li>
                        <Link href="#"><a>Upcoming movies</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>Blockbusters</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>Awarded</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>Festival</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>Trailer</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>Actors</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>Film</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>Video</a></Link>
                    </li>
                </ul>
            </div>

            <div className="popular-post-wrap sidebar-widget">
                <h3>Popular Movies</h3>
                
                <ul>
                    <li>
                        <Link href="#">
                            <a>
                                <img src="/img/blog-details/popular-img-1.jpg" alt="Image" />
                                <h3>Tattoo life</h3>
                                <span>$39</span>	
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="#">
                            <a>
                                <img src="/img/blog-details/popular-img-2.jpg" alt="Image" />
                                <h3>Human faith</h3>
                                <span>$29</span>	
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="#">
                            <a>
                                <img src="/img/blog-details/popular-img-3.jpg" alt="Image" />
                                <h3>Alone journey</h3>
                                <span>$49</span>		
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="tags-wrap sidebar-widget">
                <h3>Tags</h3>

                <ul>
                    <li>
                        <Link href="#">
                            <a>Actor</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Film Production</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Cinema</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Movie</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Director</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Entertainment</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Awarded</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Production</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ShopSidebar;
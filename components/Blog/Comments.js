import React from 'react';
import Link from 'next/link';

const Comments = () => {
    return (
        <React.Fragment>
            <div className="comments-wrap">
                <h3>User comments (02)</h3>

                <ul>
                    <li>
                        <img src="/img/blog-details/comments-img-1.jpg" alt="Image" />
                        <h3>Lorna Smith</h3>
                        <span>Movie Editor</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus fuga ab eveniet, similique eveniet itaque molestias dolor iure error, dignissimos culpa sapiente repudiandae cumque ratione omnis sit? Nostrum, in eveniet itaque molestias similique eveniet dolor.</p>

                        <Link href="#">
                            <a>
                                <i className="bx bxs-share"></i>
                                Reply
                            </a>
                        </Link>
                    </li>

                    <li>
                        <img src="/img/blog-details/comments-img-2.jpg" alt="Image" />
                        <h3>Phyllis Trimble</h3>
                        <span>Director</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus fuga ab eveniet, similique eveniet itaque molestias dolor iure error, dignissimos culpa sapiente repudiandae cumque ratione omnis sit? Nostrum, in eveniet itaque molestias similique eveniet dolor.</p>

                        <Link href="#">
                            <a>
                                <i className="bx bxs-share"></i>
                                Reply
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="leave-reply-wrap">
                <h3>Leave A Reply</h3>
                <p>Your email address will not be published. Required fields are marked*</p>

                <form>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" id="name" className="form-control" placeholder="What your name?" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" id="email" className="form-control" placeholder="Your email address" />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Your website</label>
                                <input type="text" name="your-website-link" id="your-website-link" className="form-control" placeholder="Your website link" />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" className="form-control" id="message" rows="8" placeholder="Write your message"></textarea>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Save my name, email, and website in this browser for the next time I comment.</label>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <button type="submit" className="default-btn page-btn">
                                Post A Comment
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Comments;
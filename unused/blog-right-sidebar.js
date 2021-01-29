import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogTwoColumns from '../components/Blog/BlogTwoColumns';
import BlogSidebar from '../components/Blog/BlogSidebar';
import Footer from '../components/_App/Footer';

const BlogRightSidebar = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Blog Right Sidebar" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Right Sidebar" 
                imgClass="bg-8" 
            />    

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* BlogTwoColumns */}
                            <BlogTwoColumns />
                        </div>

                        <div className="col-lg-4">
                            {/* Blog Sidebar */}
                            <div className="blog-right-sidebar">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <Footer />
        </React.Fragment>
    )
}

export default BlogRightSidebar;
import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import BlogSidebar from '../components/Blog/BlogSidebar';
import Footer from '../components/_App/Footer';

const BlogDetails = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Blog Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Details" 
                imgClass="bg-5" 
            />    

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* BlogDetailsContent */}
                            <BlogDetailsContent />
                        </div>

                        <div className="col-lg-4">
                            {/* Blog Sidebar */}
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div> 

            <Footer />
        </React.Fragment>
    )
}

export default BlogDetails;
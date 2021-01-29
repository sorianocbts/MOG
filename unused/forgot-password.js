import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ForgotPasswordForm from '../components/ForgotPassword/ForgotPasswordForm';
import Footer from '../components/_App/Footer';

const ForgotPassword = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Forgot Password" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Forgot Password" 
                imgClass="bg-16"  
            />    
            <ForgotPasswordForm />
            <Footer />
        </React.Fragment>
    )
}

export default ForgotPassword;
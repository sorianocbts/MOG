import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import MyAccountForm from '../components/MyAccount/MyAccountForm';
import Footer from '../components/_App/Footer';

const MyAccount = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="My Account" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="My Account" 
                imgClass="bg-15" 
            />    
            <MyAccountForm />
            <Footer />
        </React.Fragment>
    )
}

export default MyAccount;
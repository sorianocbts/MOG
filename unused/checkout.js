import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Router from 'next/router'
import { toast } from 'react-toastify'
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

const Checkout = () => {
    const dispatch = useDispatch()
    const total = useSelector(state => state.total)

    const handleReset = () => {
        dispatch({
            type: 'RESET_CART'
        })

        toast.success('Order Placed Successfully', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        })
        Router.push('/')
    }
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Checkout" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Checkout" 
                imgClass="bg-11" 
            />    

            <section className="checkout-area ptb-100">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="billing-details">
                                    <h3 className="title">Billing Details</h3>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Country <span className="required">*</span></label>
                                            
                                                <div className="select-box">
                                                    <select className="form-control">
                                                        <option value="5">United Kingdom</option>
                                                        <option value="1">China</option>
                                                        <option value="2">United Arab Emirates</option>
                                                        <option value="0">Germany</option>
                                                        <option value="3">France</option>
                                                        <option value="4">Japan</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>First Name <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Last Name <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Company Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>Address <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>Town / City <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>State / County <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Postcode / Zip <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Email Address <span className="required">*</span></label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Phone <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="ship-different-address" />
                                                <label className="form-check-label">Ship to a different address?</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Order notes (Optional)</label>
                                                <textarea name="notes" id="notes" cols="30" rows="8" placeholder="Order Notes" className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="order-details">
                                    <div className="cart-totals">
                                        <h3>Checkout Summary</h3>
                                        <ul>
                                            <li>Subtotal <span>${total.toFixed(2)}</span></li>
                                            <li>Shipping <span>$10.00</span></li>
                                            <li>Coupon <span>$0.00</span></li>
                                            <li>Total <span>${(total + 10).toFixed(2)}</span></li>
                                            <li><b>Payable Total</b> <span><b>${(total + 10).toFixed(2)}</b></span></li>
                                        </ul>
                                    </div>
                                
                                    
                                    <div className="faq-accordion">
                                        <ul className="accordion">
                                            <li>
                                                <h3>Payment method</h3>
                                            </li>
                                            <li className="accordion-item active">
                                                <span className="accordion-title">
                                                    Direct Bank Transfer
                                                </span>

                                                <p className="accordion-content show">
                                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have our account.
                                                </p>
                                            </li>
                                            
                                            <li className="accordion-item">
                                                <span className="accordion-title">
                                                    Cheque Payment
                                                </span>

                                                <p className="accordion-content">
                                                    Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                                </p>
                                            </li>
                                            
                                            <li className="accordion-item">
                                                <span className="accordion-title">
                                                    Paypal
                                                </span>

                                                <p className="accordion-content">
                                                    Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                                                </p>
                                            </li>
                                            <li className="accordion-item">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="ship-differents-address" />
                                                    <label className="form-check-label">I’ve read and accept the terms & conditions *</label>
                                                </div>
                                            </li>
                                            
                                            <li className="place-order">
                                                <Link href="#">
                                                    <a 
                                                        className="default-btn two" 
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            handleReset()
                                                        }}
                                                    >
                                                        Place Order
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
 
            <Footer />
        </React.Fragment>
    )
}

export default Checkout;
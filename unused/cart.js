import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/_App/Navbar'
import PageBanner from '../components/Common/PageBanner'
import Link from 'next/link'
import Footer from '../components/_App/Footer'
import Content from '../components/Cart/Content'

const Cart = () => {
    const products = useSelector(state => state.addedItems)
    const total = useSelector(state => state.total)
    
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Cart" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Cart" 
                imgClass="bg-10" 
            />    

            <section className="cart-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <form>
                                <div className="cart-wraps">
                                    <div className="cart-table table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>                                        
                                            <Content products={products} />
                                        </table>
                                    </div>

                                    <div className="coupon-cart">
                                        <div className="row">
                                            <div className="col-lg-8 col-sm-7">
                                                <div className="form-group mb-0">
                                                    <input type="text" className="form-control" placeholder="Coupon Code" />
                                                    <button className="btn default-btn two" disabled={true}>Apply Coupon</button>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-sm-5 text-right">
                                                <div className="update-cart-btn">
                                                    <Link href="#">
                                                        <a className="default-btn two" onClick={e => e.preventDefault()}>
                                                            Update Cart
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-4">
                            <div className="cart-totals">
                                <h3>Checkout Summary</h3>
                                <ul>
                                    <li>Subtotal <span>${total.toFixed(2)}</span></li>
                                    <li>Shipping <span>$10.00</span></li>
                                    <li>Coupon <span>$0.00</span></li>
                                    <li>Total <span>${(total + 10).toFixed(2)}</span></li>
                                    <li><b>Payable Total</b> <span><b>${(total + 10).toFixed(2)}</b></span></li>
                                </ul>

                                <Link href="/checkout">
                                    <a className="default-btn two">
                                        Proceed to Checkout
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </React.Fragment>
    )
}

export default Cart;
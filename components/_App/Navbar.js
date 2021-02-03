import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Link from '../../utils/ActiveLink';
import SidebarModal from './SidebarModal';
import { goToAnchor, configureAnchors } from 'react-scrollable-anchor'

const Navbar = () => {
    configureAnchors({ offset: -170, scrollDuration: 500 })
    const dispatch = useDispatch()
    const products = useSelector((state) => state.addedItems)
    const collapsed = useSelector((state) => state.collapsedState)

    const toggleNavbar = () => {
        dispatch({
            type: 'COLLAPSED_STATE',
        })
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    // Sidebar Modal
    const toggleSidebarModal = () => {
        dispatch({
            type: 'SIDEBAR_MODAL_STATE',
        })
    }

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <style>{`
            
            `}</style>
            <div id="navbar" className="navbar-area">
                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg">
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <img src="/img/banner/moglogo.png" alt="logo" />
                                    <img style={{ marginLeft: '8px', minWidth: '105px', height: '30px' }} src="/img/banner/ctfheader.png" alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    {/* <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Home <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home One</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Two</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Three</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}

                                    {/* <li className="nav-item">
                                        <Link href="/about" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">About</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Pages <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Testimonials</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Portfolio <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/portfolio-columns-two" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Portfolio Columns Two</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/portfolio-columns-three" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Portfolio Columns Three</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/portfolio-columns-four" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Portfolio Columns Four</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/portfolio-details" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Portfolio Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/team" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Team</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        User <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/my-account" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">My Account</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/forgot-password" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Forgot Password</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">FAQ</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}

                                    {/* <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Shop <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/shop" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Shop</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/cart" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Cart</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/checkout" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Checkout</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/product/5f05ab914875b805d9f87b09" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Product Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}

                                    {/*  <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Blog  <i className='bx bx-chevron-down'></i> 
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog-grid" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Grid</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-left-sidebar" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Left Sidebar</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-right-sidebar" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul> 
                                    </li>*/}
                                    <li className="nav-item">
                                        <Link href="#video-index" activeClassName="active" >
                                            <a onClick={() => goToAnchor('video-index')} className="nav-link">Index</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#contactForm" activeClassName="active" >
                                            <a onClick={() => goToAnchor('contactForm')} className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="others-option">
                                    {/* <form className="search-form">
                                        <input className="form-control" name="search" placeholder="SEARCH" type="text" />
                                        <button className="search-button" type="submit">
                                            <i className="bx bx-search"></i>
                                        </button>
                                    </form> */}

                                    {/* <div className="cart-icon">
                                        <Link href="/cart">
                                            <a>
                                                <i className="flaticon-shopping-cart"></i>
                                                <span>{products.length}</span>
                                            </a>
                                        </Link>
                                    </div> */}

                                    <div className="menu-icon">
                                        <Link href="#">
                                            <a className="burger-menu" onClick={e => { e.preventDefault(); toggleSidebarModal() }}>
                                                <i className="flaticon-menu-button"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Sidebar Modal */}
            <SidebarModal />
        </React.Fragment >
    );
}

export default Navbar;

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [subEmail, setSubEmail] = React.useState('')
    const handleSub = (e) => {
        e.preventDefault()
        async function postData() {
            const response = await fetch('/api/sendSub', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ pass: process.env.TEMP_POST_PASS, email: subEmail })
            })

            return response.json()
        }
        postData()
        alert('Thank you!');
        setSubEmail('');
    }
    return (
        <React.Fragment>
            <footer className="footer-top-area pt-100 pb-70" id="#contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a><img src="/img/banner/moglogowhite.png" alt="Image" /></a>
                                    </Link>
                                </div>
                            </div>
                        </div>




                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Contact Us</h3>

                                <ul className="address">
                                    <li>
                                        <i className="flaticon-pin"></i>
                                        1501 E 26th St., Owensboro, KY 42303
                                    </li>
                                    <li>
                                        <i className="flaticon-email-1"></i>
                                        <a href="mailto:hello@vivi.com">
                                            info@confessingthefaith.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="flaticon-phone-call"></i>
                                        <a href="tel:+270-925-6992">
                                            (270) 925 6992
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <div className="newsletter-wrap">
                                    <h3>Subscribe Newsletter</h3>
                                    <form className="newsletter-form" onSubmit={(e) => handleSub(e)}>
                                        <input type="email" className="form-control" placeholder="Enter email address" name="email" value={subEmail} required onChange={(e) => setSubEmail(e.target.value)} />

                                        <button className="send-btn" type="submit">
                                            <i className="bx bx-right-arrow-alt"></i>
                                        </button>
                                    </form>
                                </div>
                                <ul className="social-wrap">
                                    <li>
                                        <a href="https://twitter.com/cbtseminary" target="_blank" rel="noopener noreferrer">
                                            <i className="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/cbtseminary/" target="_blank" rel="noopener noreferrer">
                                            <i className="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/watch/CBTSeminary/" target="_blank" rel="noopener noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/c/CBTSeminary?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                                            <i className="bx bxl-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Additional Links</h3>

                                <ul className="additional-link">
                                    <li>
                                        <Link href="/about">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-columns-two">
                                            <a>Latest Videos</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/team">
                                            <a>Team</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>Help (FAQ)</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Instagram</h3>

                                <ul className="instagram">
                                    <li>
                                        <a href="#">
                                            <img src="/img/instagram/instagram1.jpg" alt="Image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/instagram/instagram2.jpg" alt="Image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/instagram/instagram3.jpg" alt="Image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/instagram/instagram4.jpg" alt="Image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/instagram/instagram5.jpg" alt="Image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/instagram/instagram6.jpg" alt="Image" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </footer>

            <footer className="footer-bottom-area">
                <div className="container">
                    <div className="copyright-wrap">
                        <p><a
                            href="https://cbtseminary.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Copyright @{currentYear} CBTS</a></p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
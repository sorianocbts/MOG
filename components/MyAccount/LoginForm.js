import React from 'react';
import Link from 'next/link';

const LoginForm = () => {
    return (
        <div className="contact-form-action">
            <div className="section-title">
                <h2>Log In To Your Account!</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id dolorem.</p>
            </div>
            <form method="post">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <input className="form-control" type="text" name="name" placeholder="Username or Email" />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" placeholder="Password" />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="login-action">
                            <span className="log-rem">
                                <input id="remember" type="checkbox" />
                                <label htmlFor="remember">Remember me!</label>
                            </span>
                            <span className="forgot-login">
                                <Link href="/forgot-password">
                                    <a>Lost your password?</a>
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="col-12">
                        <button className="default-btn two" type="submit">
                            Log In Now
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
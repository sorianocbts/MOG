import React from 'react';
import Router from 'next/router'
import ScrollableAnchor from 'react-scrollable-anchor'
import useForm from '../../hooks/useForm'
import useWindowSize from '../../hooks/useWindowSize';
const ContactForm = () => {
    const [user, handleChange] = useForm({ name: "", email: "", phone_number: "", msg_subject: "", msg: "" });

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
                body: JSON.stringify({ pass: process.env.TEMP_POST_PASS, user })
            })

            return response.json()
        }
        postData()
        alert('Thank you!');
        Router.reload();
    }
    const [width, height] = useWindowSize()
    return (
        <div className="contact-area ptb-100"><style jsx>
            {`
            .contact-row {
                max-width:  ${width < 1140 ? '70%' : '50%'};
            align-self: center;
            }
            .index-header {
                color : #fff;
                letter-spacing: 1.2px;
            }
            `}
        </style>
            <div className="container contact-row align-items-center justify-content-center">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="contact-wrap">
                            <ScrollableAnchor id={'contact-section'}>
                                <h1 className={`index-header`}>Write Us</h1>
                            </ScrollableAnchor>


                            <form id="contactForm" onSubmit={(e) => handleSub(e)}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="name" value={user.name} onChange={handleChange} id="name" className="form-control" required placeholder="Your Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="email" name="email" value={user.email} onChange={handleChange} id="email" className="form-control" required placeholder="Your Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" value={user.phone_number} onChange={handleChange} id="phone_number" required className="form-control" placeholder="Your Phone" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="msg_subject" value={user.msg_subject} onChange={handleChange} id="msg_subject" className="form-control" required placeholder="Your Subject" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="msg" value={user.msg} onChange={handleChange} className="form-control" id="msg" cols="30" rows="5" required placeholder="Your Message"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn page-btn">
                                            Send Message
										</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
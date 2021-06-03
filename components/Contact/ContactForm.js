import React from 'react';
import Router from 'next/router'
import useForm from '../../hooks/useForm'
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
	return (
		<div className="contact-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-5">
						<div className="contact-info">
							<h3>Get In Touch</h3>
							<p>Mon-Sat: 8:00am – 8:00pm</p>

							<ul>
								<li>
									<i className="flaticon-phone-call"></i>
									Phone:
									<a href="tel:270-925-6992">
										(270) 925 6992
                                        </a>
								</li>
								<li>
									<i className="flaticon-email-1"></i>
									Email:
									<a href="mailto:info@manofgodnetwork.com">info@manofgodnetwork.com</a>
								</li>
								<li>
									<i className="flaticon-pin"></i>
									Address:
									<span>1501 E 26th St.<br /> Owensboro, KY 42303</span>
								</li>
							</ul>

							<ul className="social-wrap">
								<li className="follow">
									Follow Us
								</li>
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

					<div className="col-lg-8 col-md-7">
						<div className="contact-wrap">
							<h3>Write Us</h3>

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
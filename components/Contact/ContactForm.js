import React from 'react';

const ContactForm = () => {
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
									<a href="tel:15877854578">+1 587 785 4578</a>
								</li>
								<li>
									<i className="flaticon-email-1"></i>
									Email:
									<a href="mailto:hello@vivi.com">hello@vivi.com</a>
								</li>
								<li>
									<i className="flaticon-pin"></i>
									Address:
									<span>6890 Blvd, The Bronx, NY 1058 <br /> New York, USA</span>
								</li>
							</ul>

							<ul className="social-wrap">
								<li className="follow">
									Follow Us
								</li>
								<li>
									<a href="#" target="_blank">
										<i className="bx bxl-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										<i className="bx bxl-instagram"></i>
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										<i className="bx bxl-facebook"></i>
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										<i className="bx bxl-youtube"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-8 col-md-7">
						<div className="contact-wrap">
							<h3>Write Us</h3>
							
							<form id="contactForm">
								<div className="row align-items-center">
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<input type="text" name="name" id="name" className="form-control" required placeholder="Your Name" />
										</div>
									</div>
		
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
										</div>
									</div>
		
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<input type="text" name="phone_number" id="phone_number" required className="form-control" placeholder="Your Phone" />
										</div>
									</div>
		
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Your Subject" />
										</div>
									</div>
		
									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<textarea name="message" className="form-control" id="message" cols="30" rows="5" required placeholder="Your Message"></textarea>
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
import React from 'react';

const ContactWithUs = () => {
    return (
        <div className="collaborate-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span>Collaborate</span>
					<h2>Work With Us</h2>
				</div>
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="collaborate-img">
							<img src="/img/collaborate-img.jpg" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="collaborate-form">
							<form method="post">
								<div className="row">
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Name</label>
											<input className="form-control" type="text" name="Name" placeholder="What Your Name?" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Email Address</label>
											<input className="form-control" type="email" name="Email" placeholder="Your Email Address" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Company</label>
											<input className="form-control" type="text" name="Company" placeholder="What Company Do You Work?" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Title</label>
											<input className="form-control" type="text" name="Title" placeholder="What's Your Title" />
										</div>
									</div>
									<div className="col-12">
										<div className="form-group">
											<label>Service</label>
											<input className="form-control" type="text" name="Production" placeholder="Podcast Production" />
										</div>
									</div>
									<div className="col-12">
										<div className="form-group">
											<label>Message</label>
											<textarea className="form-control" name="message"  rows="5"  placeholder="How Can We Help You?"></textarea>
										</div>
									</div>
									<div className="col-12">
										<button className="default-btn btn-two" type="submit">
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

export default ContactWithUs;
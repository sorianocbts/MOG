import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'

const SidebarModal = () => {
	const dispatch = useDispatch()
	const sidebarModal = useSelector((state) => state.sidebarModalState)

	// Sidebar Modal
	const toggleSidebarModal = () => {
		dispatch({
			type: 'SIDEBAR_MODAL_STATE',
		})
	}

	return (
		<div className={`sidebar-modal ${sidebarModal ? 'active' : ''}`}>
			<div className="sidebar-modal-inner">
				<div className="sidebar-header">
					<div className="sidebar-logo">
						<Link href="/">
							<a><img src="/img/banner/moglogo.png" alt="Image" style={{ maxWidth: '45%' }} /></a>
						</Link>
					</div>

					<span className="close-btn sidebar-modal-close-btn" onClick={toggleSidebarModal}>
						<i className="bx bx-x"></i>
					</span>
				</div>

				<div className="sidebar-about">
					<div className="title">
						<p>Confessing the Faith, with Dr. Samuel E. Waldron, is a theological and devotional walk throiugh the 1689 Baptist Confession of Faith.</p>
					</div>
				</div>

				<div className="contact-us">
					<h2>Contact Us</h2>

					<ul>
						<li>
							<i className="flaticon-pin"></i>
							1501 E 26th St., Owensboro, KY 42303
						</li>

						<li>
							<i className="flaticon-email-1"></i>
							<a href="mailto:info@confessingthefaith.com">info@confessingthefaith.com</a>
						</li>

						<li>
							<i className="flaticon-phone-call"></i>
							<a href="tel:270-925-6992">
								(270) 925 6992
                                        </a>
						</li>
					</ul>
				</div>

				{/* <div className="sidebar-instagram-feed">
					<h2>Instagram</h2>

					<ul>
						<li>
							<a href="#">
								<img src="/img/instagram/instagram1.jpg" alt="image" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src="/img/instagram/instagram2.jpg" alt="image" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src="/img/instagram/instagram3.jpg" alt="image" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src="/img/instagram/instagram4.jpg" alt="image" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src="/img/instagram/instagram5.jpg" alt="image" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src="/img/instagram/instagram6.jpg" alt="image" />
							</a>
						</li>
					</ul>
				</div> */}

				<div className="sidebar-follow-us">
					<h2>Follow Us</h2>

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
		</div>
	)
}

export default SidebarModal;
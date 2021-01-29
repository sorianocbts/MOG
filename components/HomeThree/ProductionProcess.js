import React from 'react';

const ProductionProcess = () => {
    return (
        <section className="production-process-area bg-color-two pt-100 pb-130">
			<div className="container">
				<div className="section-title white-title">
					<span>Our Video</span>
					<h2>Production Process</h2>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-process one">
							<i className="flaticon-help"></i>
							<p className="one">Technical Support</p>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-process two">
							<i className="flaticon-research"></i>
							<p className="two">Project Research</p>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-process three">
							<i className="flaticon-script"></i>
							<p className="three">Script & Creative</p>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-process four">
							<p className="four">Editing & Post-production</p>
							<i className="flaticon-video"></i>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-process five">
							<p className="five">Voice-over</p>
							<i className="flaticon-dubbing"></i>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-process six">
							<p className="six">Style Frames</p>
							<i className="flaticon-mirror"></i>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default ProductionProcess;
import React from 'react';

const WhatWeDo = () => {
    return (
        <div className="what-we-do-area pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="what-we-do-item">
							<i className="flaticon-film-editing-1"></i>
							<h3>Pre-Production</h3>
							<p>Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.</p>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="what-we-do-item">
							<i className="flaticon-film-editing"></i>
							<h3>Production</h3>
							<p>Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.</p>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="what-we-do-item">
							<i className="flaticon-advertising"></i>
							<h3>Post-Production</h3>
							<p>Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default WhatWeDo;
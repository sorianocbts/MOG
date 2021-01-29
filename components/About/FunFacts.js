import React from 'react';

const FunFacts = () => {
    return (
        <div className="counter-area pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<h3>135</h3>
							<p>Brand Videos</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<h3>123</h3>
							<p>Creative Filmmakers</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<h3>
                                3475
								<span className="traget">+</span>
							</h3>
							<p>Happy Users</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<h3>
                                10
								<span className="traget">+</span>
							</h3>
							<p>Awards Win</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default FunFacts;
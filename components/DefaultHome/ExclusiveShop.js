import React from 'react';
import Link from 'next/link';
import AddToCart from '../Shop/AddToCart';

const ExclusiveShop = ({ products }) => {
    return (
        <div className="exclusive-hop-area ptb-100">
			<div className="container">
				<div className="section-title white-title">
					<span>Exclusive shop</span>
					<h2>Collect Your Movies Now!</h2>
				</div>

				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="exclusive-img">
							<img src="/img/exclusive-product-img-1.jpg" alt="Image" />

							<div className="exclusive-img-2">
								<img src="/img/exclusive-product-img-2.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="exclusive-video-list">
							{products.map(product => (
								<div className="row" key={product.id}>
									<div className="col-lg-3">
										<div className="exclusive-list-img">
											<Link href="/product/[id]" as={`/product/${product.id}`}>
												<a><img src={product.image} alt="Image" /></a>
											</Link>
										</div>
									</div>

									<div className="col-lg-9">
										<div className="exclusive-text">
											<h3>
												<Link href="/product/[id]" as={`/product/${product.id}`}>
													<a>{product.title}</a>
												</Link>
											</h3>
											<span><del>${product.price}</del> ${product.price - 2}</span>
											<ul>
												<li>Director: Peter Spider</li>
												<li>Release: 01-01-2018</li>
											</ul>

											<AddToCart {...product} />
										</div>
									</div>
								</div>
							))}

						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ExclusiveShop;
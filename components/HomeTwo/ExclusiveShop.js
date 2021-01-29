import React from 'react';
import Link from 'next/link';
import AddToCart from '../Shop/AddToCart';

const ExclusiveShop = ({ products }) => {
    return (
        <div className="shop-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Exclusive shop</span>
					<h2>Collect Your Movies Now!</h2>
				</div>

				<div className="row">

					{products.map(product => (
						<div className="col-lg-3 col-sm-6" key={product.id}>
							<div className="single-shop">
								<div className="shop-img">
									<img src={product.image} alt="Image" />

									<AddToCart {...product} />
								</div>

								<h3>
									<Link href="/product/[id]" as={`/product/${product.id}`}>
										<a>{product.title}</a>
									</Link>
								</h3>
								<span>$59.00</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
    )
}

export default ExclusiveShop;
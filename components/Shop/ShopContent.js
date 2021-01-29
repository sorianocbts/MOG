import React from 'react';
import ProductsCard from './ProductsCard';
import ShopSidebar from './ShopSidebar';

const ShopContent = ({ products }) => {
    // console.log(products)
    return (
        <div className="pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {/* ProductsCars */}
                        <ProductsCard products={products} />
                    </div>

                    <div className="col-lg-4">
                        <ShopSidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopContent;
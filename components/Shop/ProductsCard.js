import React from 'react'
import CreatableSelect from 'react-select/creatable'
import AddToCart from './AddToCart'
import Link from 'next/link'

const filterOptions = [
    {label: "All", value: "all"},
    {label: "Thriller", value: "thriller"},
    {label: "Drugs", value: "drugs"},
    {label: "War", value: "war"},
    {label: "Crime", value: "crime"},
    {label: "Family", value: "family"},
]

const ProductsCard = ({ products }) => {
    const [filter, setFilter] = React.useState(products)

    const handleFilter = (e) => {
        if(e.value === 'all'){
            setFilter(products)
            return
        }
        setFilter(products.filter(f => f.type === e.value))
    }
    return (
        <div className="shop-grid-wrap">
            <div className="row">
                <div className="col-12">
                    <div className="woocommerce-topbar">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-7 col-sm-6">
                                <div className="woocommerce-result-count">
                                    <p>Showing {filter.length} of {products.length} results</p>
                                </div>
                            </div>
                            <CreatableSelect
                                onChange={handleFilter}
                                options={filterOptions}
                                defaultValue={filterOptions[0]}
                                className="col-lg-4 col-md-5 col-sm-6" 
                                id="productType"
                                instanceId="productType"
                                inputId="productType"
                            />
                        </div>
                    </div>
                </div>

                {filter.length ? filter.map(product => (
                    <div className="col-lg-4 col-sm-6" key={product.id}>
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
                            <span>${product.price}</span>
                        </div>
                    </div>
                )) : (
                    <h2>Empty</h2>
                )}
            </div>
        </div>
    )
}

export default ProductsCard;
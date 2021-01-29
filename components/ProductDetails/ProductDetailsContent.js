import React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const ProductDetailsContent = ({id, title, price, image, description}) => {
    const dispatch = useDispatch()
    const [qty, setQty] = React.useState(1)

    const increment = () => {
        setQty(qty + 1)
    }

    const decrement = () => {
        setQty(qty - 1)
    }

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_QUANTITY_WITH_NUMBER',
            id,
            qty
        })

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }
    return (
        <React.Fragment>
            <div className="col-lg-3 offset-lg-2 col-md-6">
                <div className="product-details-image">
                    <img src={image} alt="Image" />
                </div>
            </div>

            <div className="col-lg-6 col-md-6">
                <div className="product-details-desc">
                    <h3>{title}</h3>

                    <div className="price">
                        <span className="new-price">${price}</span>
                    </div>

                    <div className="product-review">
                        <div className="rating">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>

                        <Link href="#">
                            <a className="rating-count">5 reviews</a>
                        </Link>
                    </div>

                    <ul className="product-summery">
                        <li>SUK: <span>13246</span></li>
                        <li>Category: <span>Horror</span></li>
                        <li>Tags: <span>Awards, Festival, Movie</span></li>
                        <li>15 in stock</li>
                    </ul>
                    
                    <ul className="social-wrap">
                        <li>
                            <span>Share:</span>
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
                    </ul>
 
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="product-add-to-cart">
                                <h3>Quantities:</h3>
                                <div className="input-counter">
                                    <span onClick={decrement} className="minus-btn">
                                        <i className='bx bx-minus'></i>
                                    </span>
                                    <input type="text" value={qty} onChange={e => (e)} />
                                    <span onClick={increment} className="plus-btn">
                                        <i className='bx bx-plus'></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <button onClick={handleAddToCart} type="submit" className="default-btn two">
                                <i className="flaticon-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductDetailsContent;
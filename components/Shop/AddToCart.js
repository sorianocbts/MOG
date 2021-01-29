import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const AddToCart = ({ id }) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            id
        })

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        })
    }
    return (
        <button
            type="submit"
            className="default-btn"
            onClick={handleAddToCart}
        >
            <i className="flaticon-shopping-cart"></i>
            Add To Cart
        </button>
    )
}

export default AddToCart

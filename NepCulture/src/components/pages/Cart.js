import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart() {
    return (
        <div className='cart'>
            <h1> There are no items in your cart. </h1>
            <Link to='exhibition'>
                <button className="__continue">
                    Keep Browsing
                </button>
            </Link>
        </div>
    )
}

export default Cart

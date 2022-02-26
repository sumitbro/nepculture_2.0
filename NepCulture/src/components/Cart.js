import { Link } from 'react-router-dom'
import React from 'react'
import './Cart.css'

function Cart() {
    return (
        <header>
            <section className="main-cart-section">
                <h1>Shopping Cart</h1>

                <div className="cart-items">
                    <div className="cart-items-container">
                        <div className="items-info">
                            <div className="product-img">
                                <img src="https://www.mona.com.np/get-image/768/04ST2020_1620035459-resized768.jpg" alt="" />
                            </div>

                            <div className="title">
                                <h2>mithila art1</h2>
                                <p>size 2x2</p>
                            </div>

                            <div className="add-minus-quantity">
                                <i class="fas fa-minus minus"></i>
                                <input type="text" placeholder="2" />
                                <i class="fas fa-plus add"></i>
                            </div>

                            <div className="price">
                                <h3>2000rs</h3>
                            </div>

                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>

                            </div>

                        </div>

                        <hr />


                        <div className="items-info">
                            <div className="product-img">
                                <img src="https://www.mona.com.np/get-image/768/199PA2019_1620039746-resized768.jpg" alt="" />
                            </div>

                            <div className="title">
                                <h2>mithila art2</h2>
                                <p>size 2x2</p>
                            </div>

                            <div className="add-minus-quantity">
                                <i class="fas fa-minus minus"></i>
                                <input type="text" placeholder="2" />
                                <i class="fas fa-plus add"></i>
                            </div>

                            <div className="price">
                                <h3>2000rs</h3>
                            </div>

                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>

                            </div>

                        </div>

                        <hr />


                        <div className="items-info">
                            <div className="product-img">
                                <img src="https://www.mona.com.np/get-image/768/257PA2020_1619696359-resized768.jpg" alt="" />
                            </div>

                            <div className="title">
                                <h2>mithila art3</h2>
                                <p>size 2x2</p>
                            </div>

                            <div className="add-minus-quantity">
                                <i class="fas fa-minus minus"></i>
                                <input type="text" placeholder="2" />
                                <i class="fas fa-plus add"></i>
                            </div>

                            <div className="price">
                                <h3>2000rs</h3>
                            </div>

                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>

                            </div>

                        </div>

                        <hr />


                    </div>
                </div>
                <div className="card-total">
                    <h3>Cart Total : <span>6000rs</span></h3>
                    <Link to='itembuy'>
                        <button className='total'>Checkout</button>
                    </Link>
                </div>
            </section>
        </header>
    )
}

export default Cart

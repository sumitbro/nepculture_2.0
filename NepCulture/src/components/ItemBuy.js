import React from 'react'
import './ItemBuy.css'

function ItemBuy() {
    return (
        <div className='itembuy'>
            <div className='buy-container'>
                <div className='delivery'>
                    <h1>Delivery Information</h1>
                    <div className='del_info'>
                        <div className='column'>
                            <div className='details'>
                                <p>Full Name</p>
                                <input type='text' name='text' placeholder='Enter your first and last name' required />
                            </div>
                            <div className='details'>
                                <p>Phone Number</p>
                                <input type='text' name='text' placeholder='Please enter your phone number' required />
                            </div>
                        </div>
                        <div className='column'>
                            <div className='details'>
                                <p>Region</p>
                                <input type='text' name='text' placeholder='Enter your region' required />
                            </div>
                            <div className='details'>
                                <p>Area</p>
                                <input type='text' name='text' placeholder='Enter your area' required />
                            </div>
                            <div className='details'>
                                <p>City</p>
                                <input type='text' name='text' placeholder='Enter your city' required />
                            </div>
                            <div className='details'>
                                <p>Address</p>
                                <input type='text' name='text' placeholder='For Example: House#123, Street# 123, ABC Road' required />
                            </div>
                            <div className='details'>
                                <p>Email-address</p>
                                <input type='email' name='email' placeholder='Enter your Email Address' required />
                            </div>
                        </div>
                    </div>
                    <button className='save_info'>
                        Save
                    </button>
                </div>
                <div className='order_info'>
                    <h1>SUMMARY</h1>
                    <div className='summary'>
                        <div className='order__'>
                            <p>Free Shipping </p>
                            <p>Subtotal </p>
                            <p>Shipping (Free Shipping - Delivery Date ) </p>
                            <p>Order Total </p>
                            <p>Enter discount code</p>
                            <p> <input type='text' name='text' placeholder='Enter discount code ' /> </p>
                            <button className='dis__'>APPLY DISCOUNT</button>
                        </div>
                        <div className='prices'>
                            <p>NPR 0.00</p>
                            <p>NPR 7,999.00</p>
                            <p>NPR 0.00</p>
                            <p>NPR 7,999.00</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='pay'>
                        <button className='payment'>
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemBuy

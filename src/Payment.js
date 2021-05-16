import React from 'react'
import {Link} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';

function Payment() {
    const [{basket, user}, dipatch]= useStateValue();
    return (
        <div className="payment">
            <div className="payment_container">

            <h1> Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
            {/* payment section - delivery address*/}
                <div className="payment_section">
                        <div className="payment_title">
                            <h3>Delivery Address</h3>

                        </div>
                        <div className="payment_address">
                            <p> {user?.email} </p>
                            <p>address line 1</p>
                            <p>address line 2</p>
                        </div>
                </div>


            {/* payment section - review item */}
                <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment_item">
                {basket.map(item =>( 
                    <CheckoutProduct 
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                    />
                    ))}
                </div>
                </div>


            {/* payment section - payment method */}
                <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                </div>

                {/* stripe magic */}

            </div>
            
        </div>
    )
}

export default Payment;

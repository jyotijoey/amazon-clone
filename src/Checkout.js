import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"

function Checkout() {
    return (
        <div className="checkout">
        {/* left side */}
            <div className="checkout_left">
                <img className="checkout_ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJ0H7vg-i_rwJvM2ICFuzzBuzN3HzYCyIqA&usqp=CAU" alt="checkout ad" />
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                        {/* basket item */}
                    </h2>
                </div>
            </div>
            {/* right side */}
                <div className="checkout_right">
                    <Subtotal />
                    
                </div>
            
        </div>
    )
}

export default Checkout

import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal"

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket);
    return (
        <div className="checkout">
        {/* left side */}
            <div className="checkout_left">
                <img className="checkout_ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJ0H7vg-i_rwJvM2ICFuzzBuzN3HzYCyIqA&usqp=CAU" alt="checkout ad" />
                <div>
                    <h2 className="checkout_title">
                        Your Shopping basket
                    </h2>
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
            {/* right side */}
                <div className="checkout_right">
                    <Subtotal />
                    
                </div>
            
        </div>
    )
}

export default Checkout

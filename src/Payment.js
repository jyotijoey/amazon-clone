import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import {Link, useHistory} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{basket, user}, dipatch]= useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError]= useState(null);
    const [disable, setDisable] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret= async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${(getBasketTotal(basket) * 100)}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket])

    console.log("the clientsecret is ", clientSecret);

    const handleSubmit = async (event) => {
        //do fancy stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            //paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders');
        });
    }

    const handleChange = event => {
        //to handle the the change from the card detail section
        //listen to the change in the CardElement
        //Display any error as the customer types their card details
        setDisable(event.empty);
        setError(event.error? event.error.message : "");
    }
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
                

                    <div className="payment_details">
                        {/* stripe magic */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceDetails">
                            <CurrencyFormat
                                renderText={(value) => (
                                <>
                                    <p>
                                    {/* Part of the homework */}
                                    Order Total: <strong>{value}</strong>
                                    </p>
                                    <small className="subtotal_gift">
                                    <input type="checkbox" /> This order contains a gift
                                    </small>
                                </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)} // Part of the homework
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disable || succeeded}>
                                
                                <span>{processing?<p>processing</p>: "Buy Now"}</span>
                            </button>
                            </div>
                            {/* for error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Payment;

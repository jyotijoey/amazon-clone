import React from 'react'
import "./Product.css"
import {useStateValue} from './StateProvider';

function Product({id, title, image, price, rating}) {
   const [{basket}, dispatch] = useStateValue();

   const addToBasket = () =>{
       //dispatch item to the data layer
    //    console.log("this is the item in the basket", basket);
       dispatch({
           type: "ADD_TO_BASKET",
           item: {
               id: id,
               title: title,
               image: image,
               price: price,
               rating: rating
           },

       });
   };
   
    return (
        <div className="product">
            <div className="product_info">

                <p>{title}</p>
                <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
                </p>

                <div className="product_rating">
                    {Array(rating).fill().map((_,i) =>(
                        <p>*</p>
                    ))}
                    
                </div>
                </div>
                <img src={image} alt="The lean startup book" />

                <button onClick={addToBasket}>Add To Basket</button>
            
        </div>
    )
}

export default Product;

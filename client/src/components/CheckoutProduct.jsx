import React from 'react'

import './App.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

   const removeFromBasket = () => {
      // remove item from basket
      dispatch({
         type: 'REMOVE_FROM_BASKET',
         id: id,         
      })
   }

  return (
    <div className="flex flex-row gap-4 px-4">

      <img className="w-3/5 h-full max-h-[30vh] max-w-[20vw]" src={image} alt="Product Image" />      

      <div className="flex flex-col justify-evenly items-center max-h-[30vh] max-w-[20vw]">

         <div>
            <p>{title}</p>
            <p>
               <small>$ </small>
               <strong>{price}</strong>
            </p>
            <div className="flex">
               {Array(rating)
                .fill()
                .map((_, i) => (
                   <p>⭐</p>
                ))}
            </div>
         </div>

         
         <button className="p-1 border-2 border-black rounded bg-yellow-500" onClick = {removeFromBasket}>Remove From Basket</button>
         
      </div>

    </div>
  )
}

export default CheckoutProduct
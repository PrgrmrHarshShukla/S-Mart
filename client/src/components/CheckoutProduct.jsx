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

      <img className="sm:w-80 w-40 sm:h-80 max-h-[30vh] max-w-[40vw] sm:max-w-[20vw]" src={image} alt="Product Image" />      

      <div className="flex flex-col justify-evenly items-start max-h-[30vh] max-w-[40vw] sm:max-w-[20vw]">

         <div>
            <p className="sm:text-[18px] text-[14px] font-semibold">{title}</p>
            <p>
               <small>$ </small>
               <strong className="font-bold text-[]14px sm:text-[18px]">{price}</strong>
            </p>
            <div className="flex">
               {Array(rating)
                .fill()
                .map((_, i) => (
                   <p>⭐</p>
                ))}
            </div>
         </div>

         
         <button className="p-1 border-2 border-black rounded bg-yellow-500" onClick = {removeFromBasket}>Remove</button>
         
      </div>

    </div>
  )
}

export default CheckoutProduct
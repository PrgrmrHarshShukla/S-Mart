import React from 'react'

import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';



function Payment() {

  const [{ basket, user }, dispatch] = useStateValue();


  return (
    <div className="min-h-screen h-auto mt-16 w-screen">



      <div className="h-16 flex justify-center items-center bg-slate-400">
         <p className="text-2xl">Checkout (<Link to="/checkout" title="Go To Checkout Page">{basket?.length} items</Link>)</p>
      </div>

      <hr className="w-screen border-black border-b-2 mb-8" />

      <div className="flex flex-row justify-evenly px-4">
         <strong className="w-1/4 text-left">Delivery Email</strong>
         <div className="w-3/4 text-left px-4">
            <h3>{user.email}</h3>
         </div>
      </div>
      
      <hr className="w-screen border-black border-b-2 my-8" />

      <div className="flex flex-row justify-evenly px-4 h-auto">
         <strong className="w-1/4 text-left">Your Basket</strong>
         <div className="w-3/4 flex flex-col justify-start gap-2">
            {basket.map(item => (
              <CheckoutProduct 
              id = {item.id} 
              title = {item.title} 
              image = {item.image} 
              price = {item.price} 
              rating = {item.rating}
              />
            ))}
         </div>
      </div>

      <hr className="w-screen border-black border-b-2 my-8" />

      <div className="flex flex-row justify-evenly px-4 mb-8">
         <strong className="w-1/4 text-left">Proceed with Payment</strong>
         <div className="w-3/4 text-left px-4">
           <button className="border-black border-2 bg-sky-500 rounded p-1">Pay Now</button>
         </div>
      </div>



    </div>
  )
}

export default Payment
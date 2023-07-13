import React from 'react'

import './App.css'

import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
// import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import thanks from "./thanks.png"

function Checkout() {

  const [{ basket, user }, dispatch] = useStateValue(); 


  return (
    <div className="flex flex-col gap-4 min-h-screen h-auto items-center mb-4  w-11/12 overflow-hidden">

      <div className="w-auto h-[50vh]">

        <img src={thanks} className="w-full h-full " id="header" alt="Thank You Note" />  
              
      </div>



      <div className="z-10 w-full flex flex-col-reverse sm:flex-row gap-4 justify-evenly -mt-16">

        <div className="flex flex-col justify-center items-center sm:w-1/2 border-2 border-slate-400 border-solid p-2 h-auto">
          <h3>Hello, {user?.email}</h3>

          <strong className="z-20 text-2xl mb-2"><u>Your Basket</u></strong>  

          <div className="my-8 flex flex-col gap-12 max-w-[90vw] sm:max-w-[50vw]">
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

        <div className="max-h-[20vh] flex flex-col justify-center items-center sm:w-1/2 border-2 border-solid border-slate-400 p-2 overflow-auto">
          <Subtotal />          
        </div>

      </div>

      

    </div>
  )
}

export default Checkout
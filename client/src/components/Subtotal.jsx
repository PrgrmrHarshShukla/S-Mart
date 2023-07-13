import React from 'react'

import './App.css'

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom'



function Subtotal() {

  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate(); 


  return (
    <div className="flex flex-col gap-2 justify-evenly mt-2">
      <CurrencyFormat

        renderText = {(value) => ( 
          <>
            <p>
              Subtotal ({basket.length} items) :  
              <strong> {value}</strong>
            </p>
            {/* <small className="flex flex-row gap-2 justify-center">
              <input type="checkbox" /> This order contains a gift
            </small> */}
          </>
        )}

        decimalScale = {2}
        value = {getBasketTotal(basket)}
        displayType = {"text"}
        thousandSeparator = {true}
        prefix = {"$"}

      />

      <button className="border-2 border-black rounded mt-4 mb-2 active:bg-yellow-600 bg-yellow-500" onClick = {() => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
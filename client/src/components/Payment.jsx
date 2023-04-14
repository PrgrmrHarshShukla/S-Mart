import React, { useState, useEffect } from 'react'
import { ReactDOM } from 'react-dom';

import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { doc, setDoc, collection } from 'firebase/firestore';
import { db } from './firebase';


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  // const userOrderRef = collection(db, 'users', user?.uid, 'orders');
  // const paymentDocRef = doc(userOrderRef, paymentIntent.id);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
   // generates the special stripe secret which allows us to charge a customer

   const getClientSecret = async () => {
       const response = await axios({
         method: 'post',
         url: `/payments/create?total=${getBasketTotal(basket) * 100}`
       });
       setClientSecret(response.data.clientSecret)
    }    

    getClientSecret();
  }, [basket])

  console.log('The secret is **', clientSecret)
  console.log('The **user** is ', user)

  const handleSubmit = async (event) => {
    event.preventDefault();   
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
         card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      // const userOrderRef = collection(db, 'users', user?.uid, 'orders');
      
      // if( paymentIntent ) {
      //   const paymentDocRef = doc(userOrderRef, paymentIntent.id);
      //   setDoc(paymentDocRef, {
      //     basket: basket,
      //     amount: paymentIntent.amount,
      //     created: paymentIntent.created
      //   });
      // }    
      
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: 'EMPTY_BASKET'
      })

      navigate('/orders', { replace: true });
    })
  }

  const handleChange = (event) => {
   //Listen to changes in the cardElement, AND   
   //Display any errors as the customer enters the card details
   setDisabled(event.empty);
   setError(event.error ? event.error.message : "");
  }


  return (
    <div className="min-h-screen h-auto mt-16 w-screen">


      <div className="h-16 flex justify-center items-center bg-slate-400">
         <p className="text-2xl">Checkout (<Link to="/checkout" title="Go To Checkout Page">{basket?.length} items</Link>)</p>
      </div>

      <hr className="w-screen border-black border-b-2 mb-8" />

      <div className="flex flex-row justify-evenly px-4">
         <strong className="w-1/4 text-left">Delivery Address</strong>
         <div className="w-3/4 text-left px-4">
            <h3>{user.email}</h3>
            <h3>321 React Lane</h3>
            <h3>Los Angeles, CA</h3>
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
           <form onSubmit = {handleSubmit} className="flex flex-col gap-4">
            <CardElement onChange = {handleChange} />
            <div>
              <CurrencyFormat
                 renderText = {(value) => ( 
                   <>
                     <p>
                       Total Amount :  
                       <strong> {value}</strong>
                     </p>
                   </>
                 )}
                 decimalScale = {2}
                 value = {getBasketTotal(basket)}
                 displayType = {"text"}
                 thousandSeparator = {true}
                 prefix = {"$"}
              />
              <button className="rounded border-2 border-black  bg-sky-400 p-1 mt-4" disabled = {processing || disabled ||  succeeded}>
                 <span>
                    {processing ? <p>Processing</p> : "Pay Now"}
                 </span>
              </button>
            </div>  
           </form>
              
           {error && <div>{error}</div>}      
           
         </div>

      </div>



    </div>
  )
}

export default Payment
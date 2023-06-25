import React, { useEffect } from 'react'
import  ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Payment from './Payment';
import Orders from './Orders';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Empty from './Empty';

const promise = loadStripe('pk_test_51MvcWrSDgT7bpXx6aQKqIYZ6XWWdQAbjvvf0HRpBTZgqWgv0zkDPLmuaD8Qy4eEidTDS14PGeUsRg2Bh4BGvGKis00tw0w9w4U');
 

function App() {
  const [{ user }, dispatch] = useStateValue();
  
  useEffect(() => {
    //Add a listener to check if the user is logged in or not
    const unsubscribe = onAuthStateChanged(auth, (user) => {      
      if (user) {
        // If user is logged in, update the data layer with the user data
        console.log('The user is', user);
        dispatch({
          type: 'SET_USER',
          user: {
            uid: user.uid,
            email: user.email,
          },
        });
      }
      else {
        //If user is not logged in, clear the user data from the data layer
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    //unsubscribe the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  


  return (
    <div className="relative flex flex-col items-center bg-slate-300 mix-blend-color-burn h-auto">
        <Router>
          <Routes>
            <Route exact path="/" element = {[<Header />, <Home />]} />
            <Route exact path="/orders" element = {<Orders />} />
            <Route exact path="/login" element = {<Login />} />
            <Route exact path="/checkout" element = {[<Header />, <Checkout />]} />
            {
              user ?
                <Route 
                  exact 
                  path="/payment" 
                  element = {[<Header />, 
                    <Elements stripe = {promise}>
                      <Payment />
                    </Elements>
                  ]} />
              :
                <Route exact path="/payment" element = {[<Header />, <Empty />]} />
            }
          </Routes>
        </Router>
    </div>
  );
}

export default App;
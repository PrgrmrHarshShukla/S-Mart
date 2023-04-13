import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Payment from './Payment';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


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
            <Route exact path="/login" element = {<Login />} />
            <Route exact path="/checkout" element = {[<Header />, <Checkout />]} />
            <Route exact path="/payment" element = {[<Header />, <Payment />]} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 
import '@fortawesome/fontawesome-free/css/all.css'
import './App.css'

import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';


function Header() {
  const [{ basket, user } , dispatch] = useStateValue();
  const storage = getStorage()
  

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

  const getImages = async () => {
    const url1 = await getDownloadURL(ref(storage, "gs://fir-mart-5971d.appspot.com/logo.png"))
    document.getElementById("logo").setAttribute("src", url1)
  }
  getImages()


  return (
    <div className="fixed flex flex-row gap-1 justify-between items-center bg-slate-100 border-b-2 border-solid border-black z-20 w-screen h-16 px-20">

      <div>
        <Link to="/">
          <img id="logo" className="z-0 h-12 w-20 " alt="Site Logo" title="Go to Home Page" />
        </Link>
      </div>
      

      <div className="flex flex-row gap-x-4 justify-evenly items-center w-1/4">
        <Link to = {!user && '/login'} title = {user ? '' : 'Go To Sign-in Page'}>
          <div onClick={handleAuthentication} className="flex flex-col">
            <span className="text-xs">Hello {user ? user.email : 'Guest'}</span>
            <span className="font-bold">{user ? 'Sign out' : 'Sign in'}</span>
          </div>
        </Link>
        <div className="flex flex-col">
          <span className="text-xs">Your</span>
          <span className="font-bold">Orders</span>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <Link to="/checkout">
            <i className="fas fa-shopping-basket" title="Go to Checkout Page"></i>
          </Link>
          <span>{basket?.length}</span>
        </div>
      </div>
      
    </div>
  )
}

export default Header;
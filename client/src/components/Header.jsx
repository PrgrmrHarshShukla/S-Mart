import GoogleFontLoader from 'react-google-font-loader';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 
import '@fortawesome/fontawesome-free/css/all.css'
import './App.css'

import { useStateValue } from './StateProvider';
import { auth } from './firebase';
// import { getDownloadURL, ref } from 'firebase/storage';
import logo from "./logo.png"


function Header() {
  const [{ basket, user } , dispatch] = useStateValue();
  // const storage = getStorage()
  

  const handleAuthentication = () => {
    if(user) {
      let confirmation = confirm("Do you want to sign out?")
      if(confirmation) {
        auth.signOut();
        alert("You have signed out of your account.")
      }
    }
  }

  // const getImages = async () => {
  //   const url1 = await getDownloadURL(ref(storage, "gs://fir-mart-5971d.appspot.com/logo.png"))
  //   document.getElementById("logo").setAttribute("src", url1)
  // }
  // getImages()


  return (
    <div className="fixed flex flex-row gap-1 justify-between items-center bg-slate-100 border-b-2 border-solid border-black z-20 w-[100vw] h-16 pl-8 pr-4 sm:px-20">

      <div>
        <Link to="/" className="flex flex-row items-center gap-4">
          <img id="logo" src={logo} className="z-0 h-12 w-20 " alt="Site Logo" title="Go to Home Page" />
          <div>
            <GoogleFontLoader fonts={[{ font: 'Pangolin' }]}/>
            <span style={{ fontFamily: 'Pangolin, sans-serif' }} className="hidden md:block font-bold text-4xl text-blue-800 font-serif">S-Mart</span>
          </div>
        </Link>
      </div>
      

      <div className="flex flex-row-reverse gap-x-4 justify-start sm:pr-0 pr-4 sm:justify-evenly items-center w-1/2 sm:w-1/4">
        <Link to = {!user && '/login'} title = {user ? '' : 'Go To Sign-in Page'}>
          <div onClick={handleAuthentication} className="flex flex-col">
            {/* <span className="text-xs">Hello {user ? user.email : 'Guest'}</span> */}
            <span className="font-bold">{
              user 
              ? 
              <div className="sm:flex-row flex flex-row items-center sm:gap-2">
                <span className="hidden sm:block">Sign out</span>
                <i className="fas fa-sign-out-alt" ></i>
              </div>
              : 
              <div className="sm:flex-row flex flex-row items-center sm:gap-2">
                <span className="hidden sm:block">Sign in</span>
                <i className="fas fa-sign-in-alt" ></i>
              </div>
            }</span>
          </div>
        </Link>
        <div className="flex flex-row gap-2 justify-center items-center">
          <Link to="/checkout">
            <i className="fas fa-shopping-basket" title="Go to Checkout Page"></i>
          </Link>
          <span>{basket?.length}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs hidden sm:block">Your</span>
          <span className="font-bold hidden sm:block">Orders</span>
        </div>
      </div>
      
    </div>
  )
}

export default Header;
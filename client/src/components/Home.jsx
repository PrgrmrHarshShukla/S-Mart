import React from 'react'

import './App.css'

import Product from './Product'
// import { getDownloadURL, ref } from 'firebase/storage'
// import { storage } from './firebase'
import head from "./s-mart_header.png"



function Home() {
  // const storage = getStorage()

  // useEffect(() => {
  //   const getImages = async () => {
  //     const url1 = await getDownloadURL(ref(storage, "gs://fir-mart-5971d.appspot.com/s-mart_header.png"))
  //     document.getElementById("header").setAttribute("src", url1)
  //   }
  //   getImages()
  // }, [])


  return (
  <div className="flex flex-col items-center gap-28 bg-slate-300 sm:w-11/12 w-[100vw] p-4 sm:p-2 z-1 mb-8 ">


    <div className="flex justify-center mt-16">
      <img src={head} id="header" alt="Customers" className="w-screen h-[40vh] sm:h-96 object-contain z-0" />
    </div>  

    <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly gap-4 sm:px-2 -mt-16 ml-[5vw] sm:ml-0">

      <Product
      size={30} 
      id="237452874" 
      title="SONY G1 Ultra Headphones" 
      image="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" 
      price = {99.99} 
      rating = {4} 
      />
      <Product
      size={30} 
      id="7425788734"
      title="Logitech HD WebCam" 
      image="https://images.unsplash.com/photo-1626581806599-d12b0bbd4225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2ViY2FtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
      price = {29.96}
      rating = {5}
      />
      <Product
      size={30} 
      id="438753"
      title="KTWL Wireless Mouse" 
      image="https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc311MlMjBtb3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" 
      price = {11.99} 
      rating = {5} 
      />

    </div>


    <div className="flex justify-center sm:justify-evenly flex-col sm:flex-row gap-4 sm:px-2 ml-[5vw] sm:ml-0">

      <Product
      size={30} 
      id="531562389"
      title="Cordoba Wooden Guitar" 
      image="https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGd1aXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" 
      price = {599.99} 
      rating = {5} 
      />
      <Product
      size={30} 
      id="15967454"
      title="Samsung S1 Pro 5G" 
      image="https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" price = {499.99} 
      rating = {4} 
      />
      <Product
      size={30} 
      id="256785"
      title="SONY Glamour Buds" 
      image="https://images.unsplash.com/photo-1598900863662-da1c3e6dd9d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVhcmJ1ZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
      price = {23.98} 
      rating = {4} 
      />

    </div>
      

    <div className="flex justify-center sm:px-2">

      <Product
      size={60} 
      id="4567519665"
      title="Ultra Slim Gaming Monitor" 
      image="https://images.unsplash.com/photo-1666771410140-0573b232426e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3VydmVkJTIwbW9uaXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" 
      price = {999.97} 
      rating = {5} 
      />

    </div>

  </div>
  );
}

export default Home

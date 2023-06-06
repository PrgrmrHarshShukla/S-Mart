import React from 'react'

import './App.css'

import Product from './Product'

function Home() {
  return (
  <div className="flex flex-col relative gap-28 bg-slate-300 w-11/12 z-1">


    <div className="flex justify-center mt-16">
      <img src="src\assets\s-mart_header.png" alt="Customers" className="w-screen h-96 object-contain z-0" />
    </div>  

    <div className="flex flex-row justify-evenly gap-4 px-2 -mt-16">

      <Product 
      id="237452874" 
      title="SONY G1 Ultra Headphones" 
      image="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" 
      price = {99.99} 
      rating = {4} 
      />
      <Product 
      id="7425788734"
      title="Logitech HD WebCam" 
      image="https://images.unsplash.com/photo-1626581806599-d12b0bbd4225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2ViY2FtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
      price = {29.96}
      rating = {5}
      />
      <Product 
      id="438753"
      title="KTWL Wireless Mouse" 
      image="https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc311MlMjBtb3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" 
      price = {11.99} 
      rating = {5} 
      />

    </div>


    <div className="flex justify-evenly flex-row gap-4 px-2">

      <Product 
      id="531562389"
      title="Cordoba Wooden Guitar" 
      image="https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGd1aXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" 
      price = {599.99} 
      rating = {5} 
      />
      <Product 
      id="15967454"
      title="Samsung S1 Pro 5G" 
      image="https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" price = {499.99} 
      rating = {4} 
      />
      <Product 
      id="256785"
      title="SONY Glamour Buds" 
      image="https://images.unsplash.com/photo-1598900863662-da1c3e6dd9d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVhcmJ1ZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
      price = {23.98} 
      rating = {4} 
      />

    </div>
      

    <div className="flex justify-center px-2">

      <Product 
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

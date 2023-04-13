import React from 'react'

// import './App.css'
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  // console.log("this is the basket>>>>>>", basket);

  const addToBasket = () => {
    // console.log("update huwa");
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return ( 
    <div className="max-w-screen min-w-screen w-11/12 flex flex-col gap-0 justify-evenly bg-white text-left p-1 h-auto max-h-[90vh]">

      <div className="p-1">
         <p className="truncate">{title}</p>
         <p>
            <small>$</small>
            <strong>{price}</strong>
         </p>
         <div className="flex">
           {Array(rating)
             .fill()
             .map((_, i) => (
                <p>⭐</p>
             ))}
         </div>
         
      </div>
      
      
      <img src = {image} alt="Product Image" className="h-2/3 w-auto" />

      <div className="flex flex-col items-center">
        <button className="border-solid border-2 border-black rounded bg-yellow-500 p-1 h-full w-auto mt-1" onClick = {addToBasket}>Add to Basket</button>
      </div>

    </div>
  )
}

export default Product
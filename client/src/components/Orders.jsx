import React, { useEffect, useState } from 'react'
// import { db } from './firebase';
// import { collection, doc, orderBy, onSnapshot } from 'firebase/firestore';

function Orders() {

  // const [orders, setOrders] = useState([]);

  // useEffect (() => {
  //   if (user) {
  //     const ordersRef = collection(db, 'users', user.uid, 'orders');
  //     const ordersQuery = orderBy(ordersRef, 'created', 'desc');
  //     const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
  //       setOrders(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       );
  //     });
  //     return () => unsubscribe();
  //   } else {
  //     setOrders([]);
  //   }
    
  // }, [user])

  return (
    <div className="min-h-screen h-auto">
      <img className="w-full h-full mix-blend-darken" src="https://images.unsplash.com/photo-1502355984-b735cb2550ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhbmslMjB5b3V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt="Thank You Note" />        
    </div>
  )
}

export default Orders
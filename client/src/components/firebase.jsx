import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyAyyN9R2eZ6R2YVTWSVPlW3Fz_F0cVwuaI",
  authDomain: "fir-mart-58b2d.firebaseapp.com",
  projectId: "fir-mart-58b2d",
  storageBucket: "fir-mart-58b2d.appspot.com",
  messagingSenderId: "410115590619",
  appId: "1:410115590619:web:b9b3c19e637f024c75fffe"   
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export { db, auth };
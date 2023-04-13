import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAOouXJH0qvJX6nb2R6Yqhz2hNLZZtnoLo",
  authDomain: "fir-mart-5971d.firebaseapp.com",
  projectId: "fir-mart-5971d",
  storageBucket: "fir-mart-5971d.appspot.com",
  messagingSenderId: "341536633596",
  appId: "1:341536633596:web:3928103310718f3dcadd79"   
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export { db, auth };
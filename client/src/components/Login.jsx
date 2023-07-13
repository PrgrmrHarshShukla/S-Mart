import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 


  const signIn = async (event) => {
    event.preventDefault();
    // firebase comes into play...
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // console.log("User logged in:", user);
      navigate("/");
      alert("You have been signed in successfully.")
    } catch (error) {
      alert(`An unexpected login error occured: ${error}`);
    }
  };



  // const register = async (event) => {
  //   event.preventDefault();
    
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user;
  //     // console.log("New user registered:", user);
  //     navigate("/");
  //     alert("Your account has been created successfully.")
  //   } catch (error) {
  //     alert("An unexpected error occured: ", error);
  //   }
  // };

  

  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh] h-auto  ">
      <Link to="/">
          <img className="mix-blend-darken h-[20vh] max-w-7xl w-[20vw]" src="https://w7.pngwing.com/pngs/384/470/png-transparent-retail-computer-icons-e-commerce-sales-mega-offer-miscellaneous-service-logo.png" alt="Site Logo" title="Go to Home Page" />
      </Link>


      <div className="flex flex-col items-center border-black border-2 border-solid max-w-9xl w-[50vw] min-w-[250px] sm:min-w-[100px] text-center gap-12 py-4 pb-8 p-2 rounded">

        <strong className="text-2xl"><u>Sign in</u></strong>

        
        <form className=" flex flex-col justify-center text-left">

          <p>E-mail</p>
          <input className="mb-4 p-1 rounded w-full border-2 border-black border-solid" type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
          <p>Password</p>
          <input className="mb-4 p-1 rounded w-full border-2 border-black border-solid" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <button className="bg-yellow-500 active:bg-yellow-600 rounded border-2 border-black border-solid p-1" type="submit" onClick={signIn}>Sign in</button>

        </form>

        {/* <p>By Signing in you agree to our Conditions of use and our Cookie Policy</p> */}

        <div className="">
          <span>Do not have an account?</span>
          <Link to="/register">
            <button className="bg-yellow-500 active:bg-yellow-600 rounded border-2 border-black border-solid mt-2 p-1 w-1/2">Create New Account</button> 
          </Link>
        </div>

      </div>
      {/* {error && <div>{error}</div>} */}

    </div>
  )
}

export default Login
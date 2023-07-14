import React, { useContext, useState } from 'react';
import "./login2.scss";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/loader/Loader';



const Login2 = () => {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

 const navigate = useNavigate()
const {dispatch} = useContext(AuthContext)
  
const handleLogin = (e) => {
      e.preventDefault()
      setIsLoading(true);

      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  const user = userCredential.user;
  
       dispatch({type:"LOGIN", payload:user})
       navigate("/workersdata")
       toast.success("Login Successful.")
       setIsLoading(false)
      
    console.log(user)
    
  })
  .catch((error) => {
    toast.error(error.message)
   setError(true)
    setIsLoading(false)
  });

  }
  return (
    <>
    {isLoading && <Loader/>}

    <div className="login">
    
<div className='loginContainer'>
    
    <div className="loginform">
        <h1 >Login To Workers List</h1>
    <form onSubmit={handleLogin}>
        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        <input style={{fontSize: "14px"}} type="password" placeholder='PassWord' onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>LOGIN</button>
        {error && <span>Wrong email or password</span> }
           
        
        
      </form>
    </div>
      
    </div>
    </div>
    </>
  );
}

export default Login2;

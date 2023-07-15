import React, { useState } from 'react';
import { Send } from '@material-ui/icons';
import Faith from '../../images/worker2.jpeg'
import "./workerformz.scss";
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../loader/Loader';




const Workerformz = () => {

    const[data, setData] = useState({})
  const[isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const handleInput = (e) => {
     const name = e.target.name;
     const value = e.target.value;
     setData({...data, [name]: value})
  }
  console.log(data)

  const handleAdd = async (e) => {
     e.preventDefault()
     setIsLoading(true)

     try {
        await addDoc(collection(db, "workertrainingslist"), {
            ...data,
            timeStamp: serverTimestamp(),
          });
          setIsLoading(false)
          toast.success("Your data was added successfully")
         navigate('/')
     } catch(error) {
        toast.error(error.message)
        setIsLoading(false)
        console.log(error);
     }
  } 


  return (
    <>
    {isLoading && <Loader/>}
    <div className='workerformz'>
        
        <div className="top">
            <h1>RCCG Workers Training <b/> program</h1>
        </div>
        <div className="bottom">
            <div className="left">
                <img src={Faith} alt="prayer" className='formimage' />
            </div>
            <div className="right">
                <form onSubmit={handleAdd}>
                <div className="formInput">
                    <label htmlFor="">Name:</label>
                        <input type="text" placeholder='name' name="name" onChange={handleInput}/>
                    </div>

                    <div className="formInput">
                    <label htmlFor="">Surname:</label>
                        <input type="text" placeholder='surname' name="surname" onChange={handleInput} />
                    </div>

                    <div className="formInput">
                    <label htmlFor="">Address:</label>
                        <input type="text" placeholder='address' name="address"  onChange={handleInput} />
                    </div>

                    <div className="formInput">
                    <label htmlFor="">Phone number:</label>
                        <input type="text" placeholder='phone number' name="phonenumber"  onChange={handleInput} />
                    </div>

                    <div className="formInput">
                    <label htmlFor="">Email:</label>
                        <input type="text" placeholder='email' name="email"  onChange={handleInput}/>
                    </div>

                    
                 <div className="formInput">
                    <label htmlFor="">Sex:</label>
                        <input type="text" placeholder='sex' name="sex"  onChange={handleInput}/>
                    </div>

                    <div className="formInput">
                    <label htmlFor="">Marital statu:</label>
                        <input type="text" placeholder='marital status' name="maritalstatus"  onChange={handleInput} />
                    </div>

                    <button type='submit'>
                        <Send style={{color: "white", fontSize:"30px"}}/>
                    </button>
                </form>
            </div>
        </div>
        

    </div>
    </>
  );
}

export default Workerformz;

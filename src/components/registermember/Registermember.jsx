import React from 'react';
import { Send } from '@material-ui/icons';
import Faith from '../../images/ava40a.jpg'
import "./registermember.scss";

const Registermember = () => {
  return (
    <div className='registermember'>
        <div className="top">
            <h1>Creat an Account</h1>
        </div>
        <div className="bottom">
            <div className="left">
                <img src={Faith} alt="prayer" className='formimage' />
            </div>
            <div className="right">
                <form >
                <div className="formInput">
                    <label htmlFor="">Name:</label>
                        <input type="text" placeholder='name' />
                    </div>

                    <div className="formInput">
                    <label htmlFor="">Address:</label>
                        <input type="text" placeholder='address' />
                    </div>

                    <div className="formInput">
                    <label htmlFor="">Phone number:</label>
                        <input type="text" placeholder='phone number' />
                    </div>

                    <div className="formInput">
                    <label htmlFor="">Email:</label>
                        <input type="text" placeholder='email' />
                    </div>

                    
                 <div className="formInput">
                    <label htmlFor="">Sex:</label>
                        <input type="text" placeholder='sex' />
                    </div>

                    <div className="formInput">
                    <label htmlFor="">Marital statu:</label>
                        <input type="text" placeholder='marital status' />
                    </div>

                    <button>
                        <Send style={{color: "white", fontSize:"30px"}}/>
                    </button>
                </form>
            </div>
        </div>
      
    </div>
  );
}

export default Registermember;

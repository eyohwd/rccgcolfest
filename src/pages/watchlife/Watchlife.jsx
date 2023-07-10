import React from 'react';
import { Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import COLIMG from "../../assets/col-logo.png"
import "./watchlife.scss";
import ReactPlayer from 'react-player';
import watchIMG from "../../assets/watchlive1.jpg"

const Watchlife = () => {
  return (
    <div className='watchlife'>
        

        <div className="top">
               <Link to='/' style={{textDecoration: "none"}}>
            <Home style={{fontSize: "40px", color: "orangered"}}/>
               </Link>
            
            <h1 className='title'>
                <img src={watchIMG} alt="" className='watchlife'/>
            </h1>
            <p className='desc'>
            CITY OF LIGHT LIVE STREAM
               </p>
            <div>
                
                <img src={COLIMG} alt="logo" className='logo' />
               
                
            </div>
        </div>

        <div className="workersvid">
            <div className="vidleft">
               <ReactPlayer controls url='https://youtu.be/F8PACpXMHLg'/>
            </div>
            <div className="textright">
            <ReactPlayer controls url='https://youtu.be/KgUyWyMLZuY'/>
                <Link to='/workerform' >
                
                </Link>
            </div>
            
        </div>
      
    </div>
  );
}

export default Watchlife;

import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import COLIMG from "../../assets/col-logo.png"
import "./buildself.scss";
import ReactPlayer from 'react-player';


const Buildself = () => {
  return (
    <div className='buildself'>
      <Navbar/>
      <div className="top">
               <Link to='/' style={{textDecoration: "none"}}>
            <Home style={{fontSize: "40px", color: "orangered"}}/>
               </Link>
            
            <h1 className='title'>Serve</h1>
            <p className='desc'>
            We are committed to building an effective army for God. We hold regular training sessions where we teach the basic tenets of the Kingdom with a view to equipping
God’s people with a strong sense of commitment for service in the local assembly as well as empower them with
spiritual power to lead and take territory for God.
               </p>
            <div>
                
                <img src={COLIMG} alt="logo" className='logo' />
               
                
            </div>
        </div>

        <div className="workersvid">
            <div className="vidleft">
               <ReactPlayer width='640' height='360' controls url='https://youtu.be/-VHWlgmGfIM'/>
            </div>
            <div className="textright">
                <h2 className='heading'>RCCG WORKERS TRAINING PROGRAM</h2>
                <p>
                We are committed to building an effective army for God. We hold regular training sessions where we teach the basic tenets of the Kingdom with a view to equipping
God’s people with a strong sense of commitment for service in the local assembly as well as empower them with
spiritual power to lead and take territory for God.
                </p>
                <Link to='/workerform' >
                <button>Click to register</button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Buildself;

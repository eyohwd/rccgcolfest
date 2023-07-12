import React, { useState } from 'react';
import COLIMG from "../../assets/col-logo.png"
import { Close, Menu, SearchOutlined } from '@material-ui/icons';
import './navbar.scss';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='logo'>
                <img src={COLIMG} alt="col-logo" />
                <span className='logotext'>CITY OF LIGHT</span>
            </div>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(true)}>
              <Link to='/'  style={{textDecoration: "none"}}>
              <li >Home</li>
              </Link>
        
        <Link to='/about' style={{textDecoration: "none"}}>
        <li >About Us</li>
        </Link>
         <Link to='/watchlife' style={{textDecoration: "none"}} >
         <li>Watch Live</li>
         </Link>
         
         <Link to='/registermember' style={{textDecoration: "none"}}>
         <li>Members Registration</li>
         </Link>
         <Link to='/buildself' style={{textDecoration: "none"}}>
         <li>Become a Worker</li>
         </Link>
         <Link to='/department' style={{textDecoration: "none"}} >
         <li>Departments</li>
         </Link>

         <Link to='/contact' style={{textDecoration: "none"}} >
         <li>Contact Us</li>
         </Link>
         
         <Link to='/giving' style={{textDecoration: "none"}}>
         <li>Giving</li>
         </Link>
         
         
            </ul>

            <span className='search'>
              <input type="text" placeholder='Search...'/>
              <SearchOutlined style={{color: "white"}}/>
            </span>
            <div className="mobile-menu-icon"  onClick={()=> setIsMobile(!isMobile)}>
            {isMobile ? (<Close style={{fontSize: '30px'}}/>) : (<Menu style={{fontSize: '30px'}}/>)}
            </div>
        </div>
      
    </div>
  );
}

export default Navbar;

import React from 'react';
import COLIMG from "../../assets/col-logo.png"
import { SearchOutlined } from '@material-ui/icons';
import './navbar.scss';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='logo'>
                <img src={COLIMG} alt="col-logo" />
                <span className='logotext'>CITY OF LIGHT</span>
            </div>
            <ul>
              <Link to='/'  style={{textDecoration: "none"}}>
              <li >Home</li>
              </Link>
        
        <Link to='/about' style={{textDecoration: "none"}}>
        <li >About Us</li>
        </Link>
         
         <li>Watch Live</li>
         <Link to='/registermember' style={{textDecoration: "none"}}>
         <li>Members Registration</li>
         </Link>
         <Link to='/buildself' style={{textDecoration: "none"}}>
         <li>Build Up YourSelf</li>
         </Link>
         
         <li>Join a Community</li>
         <Link to='/giving' style={{textDecoration: "none"}}>
         <li>Giving</li>
         </Link>
         
         
            </ul>

            <span className='search'>
              <input type="text" placeholder='Search...'/>
              <SearchOutlined style={{color: "white"}}/>
            </span>

        </div>
      
    </div>
  );
}

export default Navbar;

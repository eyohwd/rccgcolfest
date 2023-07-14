import React from 'react';
import "./sibebar.scss";
import { Link } from 'react-router-dom';

const Sibebar = () => {
  return (
    <div className='sibebar'>
        <div className='containerb'>

        <ul>
            <Link to='/membersdata' style={{textDecoration: "none"}}>
            <li className='itemlist'>
            <span className='title'>Memberlist</span>
        </li>
            </Link>
        
         <Link to='/workersdata'  style={{textDecoration: "none"}}>
         <li className='itemlist'>
            <span className='title'>Workerslist</span>
        </li>
         </Link>
        
      </ul>
        </div>
      
    </div>
  );
}

export default Sibebar;

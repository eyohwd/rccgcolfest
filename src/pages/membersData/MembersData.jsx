import React from 'react';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import Sibebar from '../../components/sidebar/Sibebar';
import "./membersdata.scss";

const MembersData = () => {
  return (
    <div className='member'>
       <Navbar/> 
       <div className='membersdataContainer'>
        <Sibebar/>
       <List/>
       </div>
      
    </div>
  );
}

export default MembersData;

import React from 'react';
// import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import "./workersData.scss";
import Sibebar from '../../components/sidebar/Sibebar';
import Workerlist from '../../components/workerlist/Workerlist';

const WorkersData = () => {
  return (
    <div className='worker'>
      <Navbar/> 
       <div className='workersdataContainer'>
        <Sibebar/>
       <Workerlist/>
       </div>
    </div>
  );
}

export default WorkersData;

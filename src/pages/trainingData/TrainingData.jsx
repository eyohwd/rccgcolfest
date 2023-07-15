import React from 'react';
import Sibebar from '../../components/sidebar/Sibebar';
import Traininglist from '../../components/traininglist/Traininglist';
import './trainingData.scss';
import Navbar from '../../components/navbar/Navbar';

const TrainingData = () => {
  return (
    <div className='training'>
        <Navbar/>
      <div className='trainingdatacontainer'>
        <Sibebar/>
        <Traininglist/>
        </div>  
      
    </div>
  );
}

export default TrainingData;

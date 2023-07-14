import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Registermember from '../../components/registermember/Registermember';
import Registerworker from '../../components/registerworker/Registerworker';

const Registermem = () => {
  return (
    <div>
        <Navbar/>
        <Registermember/>
        <Registerworker/>
      
    </div>
  );
}

export default Registermem;

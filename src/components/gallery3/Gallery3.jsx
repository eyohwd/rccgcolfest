import React from 'react';
import Depgrid from '../depgrid/Depgrid';
import {depGallery3} from '../../datasource';
import "./gallery3.scss";

const Gallery3 = () => {
  return (
    <div className='container'>
        {depGallery3.map((item)=>(
            <Depgrid key={item.id} item={item}/>
        ))}
      
    </div>
  );
}

export default Gallery3;

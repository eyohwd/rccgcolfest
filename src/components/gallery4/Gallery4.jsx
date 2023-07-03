import React from 'react';
import Depgrid from '../depgrid/Depgrid';
import {depGallery4} from '../../datasource';
import "./gallery4.scss";

const Gallery4 = () => {
  return (
    <div className='container'>
        {depGallery4.map((item)=>(
            <Depgrid key={item.id} item={item}/>
        ))}
      
    </div>
  );
}

export default Gallery4;

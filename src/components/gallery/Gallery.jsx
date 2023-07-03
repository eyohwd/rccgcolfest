import React from 'react';
import Depgrid from '../depgrid/Depgrid';
import {dptGallery} from '../../datasource';
import "./gallery.scss";

const Gallery = () => {
  return (
    <div className='container'>
        {dptGallery.map((item)=>(
            <Depgrid key={item.id} item={item}/>
        ))}
      
    </div>
  );
}

export default Gallery;

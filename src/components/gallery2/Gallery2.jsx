import React from 'react';
import {depGallery2} from '../../datasource'
import './gallery2.scss'

    import Depgrid from '../depgrid/Depgrid';

const Gallery2 = () => {
  return (
    <div className='container'>
        {depGallery2.map((item)=>(
            <Depgrid key={item.id} item={item}/>
        ))}
      
    </div>
  );
}

export default Gallery2;

import React from 'react';
import "./depgrid.scss"

const Depgrid = ({item}) => {
  return (
    <div>
      <div className="container">
        <img src={item.img} alt="" />
        <h3 className='title'>{item.title}</h3>

      </div>
    </div>
  );
}

export default Depgrid;

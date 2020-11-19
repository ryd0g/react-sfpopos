import React from 'react';
import './POPOSSpace.css';
import { Link } from 'react-router-dom';

function POPOSSpace(props) {
  // Get the
  const { name, image, address, hours, id } = props;
  return (
    <div className='POPOSSpace'>
      <Link className='POPOSSpace-title' to={`/details/${id}`}>
        <h1>{name}</h1>
      </Link>

      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}images/${image}`}
          width='300'
          height='300'
          alt='Hello'
        />
      </Link>
      <div className='info'>
        <div>{address}</div>
        <div>{hours}</div>
      </div>
    </div>
  );
}

export default POPOSSpace;

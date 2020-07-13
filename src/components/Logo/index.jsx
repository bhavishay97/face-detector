import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './style.css';

function Logo() {
  return (
    <div className='m-3'>
      <Tilt className='Tilt rounded' options={{ max: 30 }}>
        <div className='Tilt-inner p-3'>
          <img className='img-fluid' src={logo} alt='logo' />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;

import React from 'react';
import './style.css';

function FaceDetection({ image }) {
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col text-center'>
          <img
            src={image}
            className='img-fluid rounded'
            id='input-image'
            alt={image ? 'face detection image' : ''}
          />
        </div>
      </div>
    </div>
  );
}

export default FaceDetection;

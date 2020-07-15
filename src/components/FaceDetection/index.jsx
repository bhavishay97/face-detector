import React from 'react';
import './style.css';

function FaceDetection({ image, box }) {
  const boxStyles = {
    top: box.topRow,
    right: box.rightCol,
    bottom: box.bottomRow,
    left: box.leftCol,
  };

  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col'>
          <div className='d-flex justify-content-center'>
            <div className='position-absolute'>
              <img
                src={image}
                className='img-fluid rounded'
                id='input-image'
                alt={image ? 'detection image/please enter correct URL' : ''}
              />
              <div className='bounding-box' style={boxStyles}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaceDetection;

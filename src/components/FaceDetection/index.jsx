import React from 'react';
import './style.css';

function FaceDetection({ image, boxes }) {
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
              {boxes &&
                boxes.map((box) => {
                  return (
                    <div
                      key={box.topRow}
                      className='bounding-box'
                      style={{
                        top: box.topRow,
                        right: box.rightCol,
                        bottom: box.bottomRow,
                        left: box.leftCol,
                      }}
                    ></div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaceDetection;

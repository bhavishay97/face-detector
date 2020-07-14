import React from 'react';
import './style.css';

function ImageLinkForm() {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-md-8 offset-md-2'>
          <form className='rounded shadow-lg'>
            <div className='form-group height d-flex align-items-center m-0 px-4'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter image URL'
              />
              <button className='btn btn-primary btn-lg'>Detect</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;

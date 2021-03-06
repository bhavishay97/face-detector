import React from 'react';
import './style.css';

function ImageLinkForm({ input, onInputChange, onDetectSubmit }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <form className='rounded shadow-lg img-link-form'>
            <div className='form-group height d-flex align-items-center m-0 px-4'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter image URL'
                onChange={onInputChange}
              />
              <button
                className='btn btn-primary btn-lg'
                disabled={input ? false : true}
                onClick={onDetectSubmit}
              >
                Detect
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;

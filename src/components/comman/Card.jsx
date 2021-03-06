import React from 'react';

function Card({ title, children }) {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 col-lg-4 offset-lg-4'>
          <div className='card bg-transparent shadow-lg'>
            <div className='card-body'>
              <h5 className='card-title text-center'>{title}</h5>
              <form>{children}</form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

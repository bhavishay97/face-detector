import React from 'react';
import Button from './Button';

function Card({ title, children }) {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-4 offset-md-4'>
          <div className='card bg-transparent shadow-lg'>
            <div className='card-body'>
              <h5 className='card-title text-center'>{title}</h5>
              <form>
                {children}
                <Button text={title} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

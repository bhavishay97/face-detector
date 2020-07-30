import React from 'react';
import './style.css';

function WelcomeText({ user }) {
  return (
    <div className='container'>
      <div className='row mb-2'>
        <div className='col-md-8 offset-md-2'>
          <div className='text-center'>
            <h1 className='display-4 text-white'>
              Hello, {user ? user.firstname : ''}
            </h1>
            <p>This app can detect faces from your images. Give it a try!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeText;

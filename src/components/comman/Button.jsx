import React from 'react';

function Button({ text, onSubmit }) {
  return (
    <button onClick={onSubmit} className='btn btn-block btn-danger'>
      {text}
    </button>
  );
}

export default Button;

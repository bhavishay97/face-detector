import React from 'react';

function Input({ name, label }) {
  return (
    <div className='form-group'>
      <label htmlFor={`input-${name}`}>{label}</label>
      <input type={name} className='form-control' id={`input-${name}`} />
    </div>
  );
}

export default Input;

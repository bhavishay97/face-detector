import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <Link className='navbar-brand text-capitalize' to='/'>
        Face detector
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink className='nav-item nav-link ' to='/register'>
            Register
          </NavLink>
          <NavLink className='nav-item nav-link ' to='/login'>
            Log in
          </NavLink>
          <NavLink className='nav-item nav-link ' to='/logout'>
            Log out
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

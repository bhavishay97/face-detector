import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar({ user }) {
  return (
    <nav className='navbar navbar-expand navbar-light'>
      <Link className='navbar-brand text-capitalize' to='/'>
        Face detector
      </Link>
      <div className='navbar-nav ml-auto font-weight-bold'>
        {!user && (
          <Fragment>
            <NavLink className='nav-item nav-link' to='/register'>
              Register
            </NavLink>
            <NavLink className='nav-item nav-link' to='/login'>
              Log in
            </NavLink>
          </Fragment>
        )}
        {user && (
          <NavLink className='nav-item nav-link ' to='/logout'>
            Log out
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>{' '}
          <li>
            <NavLink to='/' activeClassName='active'>
              New Pool
            </NavLink>
          </li>
          <li>
            <NavLink to='/' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <div className='header-username'>username logged in</div>
        <button className='btn-logout'>Logout</button>
      </div>
    </div>
  );
};

export default Nav;

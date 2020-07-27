import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { withRouter } from 'react-router-dom';

import './Nav.css';
import { render } from '@testing-library/react';

class Nav extends Component {
  checkout = (e) => {
    e.preventDefault();
    this.props.setAuthedUser(null);
    this.props.history.push('/');
  };

  render() {
    const { authedUser } = this.props;

    return (
      <div className='nav-container'>
        <nav className='nav'>
          <ul className='nav-ul'>
            <li>
              <NavLink to='/' activeClassName='active' className='nav-item'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/newPoll'
                activeClassName='active'
                className='nav-item'
              >
                New Pool
              </NavLink>
            </li>
            <li>
              <NavLink to='/' activeClassName='active' className='nav-item'>
                Leader Board
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className='header-username-logout'>
          <div className='header-username'>
            {authedUser !== null && (
              <div>
                <img className='avatar-img' src='./avatar1.png' alt='avatar' />
                <span className='user-logged'>{authedUser}</span>
              </div>
            )}
          </div>
          <button onClick={this.checkout} className='btn-logout'>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  // Convert the object users into an array of objects
  const allUsers = Object.values(users);

  return { users: allUsers, authedUser };
};

export default withRouter(connect(mapStateToProps, { setAuthedUser })(Nav));

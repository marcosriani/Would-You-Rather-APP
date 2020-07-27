import React, { Component, Fragment } from 'react';
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
    const { authedUser, users } = this.props;

    return (
      <Fragment>
        {authedUser !== null && (
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
                    <img
                      className='avatar-img'
                      src={users[authedUser].avatarURL}
                      alt='avatar'
                    />
                    <span className='user-logged'>{authedUser}</span>
                  </div>
                )}
              </div>
              <button onClick={this.checkout} className='btn-logout'>
                Logout
              </button>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return { users, authedUser };
};

export default withRouter(connect(mapStateToProps, { setAuthedUser })(Nav));

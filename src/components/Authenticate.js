import React, { Component } from 'react';

// CSS
import './Authenticate.css';

class Authenticate extends Component {
  render() {
    return (
      <div className='authenticate-container'>
        <div className='authenticate-header'>
          <h2>Welcome! Let's Play?</h2>
          <p>Please sign in to continue</p>
        </div>
        <div className='authenticate-img-wrapper'>
          <img
            className='authenticate-wallpaper'
            src='./woudyourather.png'
            alt='wallpaper'
          />
        </div>
        <form className='authenticate-form'>
          <label>To Sign In choose an User</label>
          <select id='username' name='username'>
            <option value='username1'>username1</option>
            <option value='username2'>username2</option>
          </select>
          <button type='submit' className='authenticate-btn'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Authenticate;

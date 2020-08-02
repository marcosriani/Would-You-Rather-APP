import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='error-page-wrapper'>
      <h1>404 - Page not found. Please make sure to login first.</h1>
      <img alt='error' src='./error.png' />
      <button>
        <Link to='/'>Go Back To Login Page</Link>
      </button>
    </div>
  );
};

export default ErrorPage;

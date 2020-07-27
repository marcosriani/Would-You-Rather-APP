import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className='error-page-wrapper'>
      <h1>404 - Page not found. Please make sure to login first.</h1>
      <img alt='error' src='./error.png' />
    </div>
  );
};

export default ErrorPage;

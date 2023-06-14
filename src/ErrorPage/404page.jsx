// import React from 'react';
import { Link } from 'react-router-dom';
import './404Page.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page text-white bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5B0q9MM_Yn4Ho8dPwMoj5yNQweFdouJ4BcxRxuR1d&s')]">
      <div className="container">
        <h1 className="title">Oops! Page Not Found</h1>
        <p className="message">
          We're sorry, but the page you requested does not exist.
        </p>
        <Link to='/' className='home-link'>Go Back To Home Page</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

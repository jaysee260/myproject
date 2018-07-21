import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => 
  <div className="not-found hero">
    <div className="hero-body">
      <div className="container has-text-centered">
      <h1 className="title">
        404
      </h1>
      <h2 className="subtitle">
        Page not found!
      </h2>
      <p className="subtitle">
        <Link to='/'>
          Go back to the main page
        </Link>
      </p>
      </div>
    </div>
  </div>

export default NotFoundPage;
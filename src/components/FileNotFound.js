import React from 'react';
import { Link } from 'react-router-dom';

const FileNotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>The page you requested doesn't exist.</p>
      <p>
        Go back{' '}
        <Link to="/" className="home-btn">
          Home
        </Link>
      </p>
    </div>
  );
};

export default FileNotFound;

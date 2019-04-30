import React from 'react';

const FileNotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>The page you requested doesn't exist.</p>
      <p>
        Go back <a href="/">Home</a>
      </p>
    </div>
  );
};

export default FileNotFound;

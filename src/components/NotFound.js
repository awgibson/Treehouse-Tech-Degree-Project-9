//This component displays a no results found page if no images are found

//Bring in dependencies
import React from 'react';

const NotFound = () => {
  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>Your search did not return any results. Please try again.</p>
    </li>
  );
};

export default NotFound;

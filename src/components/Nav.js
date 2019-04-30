//Bring in dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

//Clicking the buttons navigates to the appropriate url and uses the handleFetch to search on click
const Nav = ({ handleFetch }) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to={'/cats'} onClick={() => handleFetch('cats')}>
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink to={`/mountains`} onClick={() => handleFetch('mountains')}>
            Mountains
          </NavLink>
        </li>
        <li>
          <NavLink to={`/coffee`} onClick={() => handleFetch('coffee')}>
            Coffee
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

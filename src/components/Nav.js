import React from 'react';
import { NavLink } from 'react-router-dom';

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

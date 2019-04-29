import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ handleFetch, match }) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to={`/cats`} onClick={() => handleFetch('cats')}>
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink to={`/dogs`} onClick={() => handleFetch('dogs')}>
            Dogs
          </NavLink>
        </li>
        <li>
          <NavLink to={`/computers`} onClick={() => handleFetch('computers')}>
            Computers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

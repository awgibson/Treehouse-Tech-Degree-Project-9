import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ handleFetch, match }) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to={`/cats`} onClick={() => this.handleFetch('cats')}>
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink to={`/mountains`} onClick={() => this.handleFetch('mountains')}>
            Mountains
          </NavLink>
        </li>
        <li>
          <NavLink to={`/coffee`} onClick={() => this.handleFetch('coffee')}>
            Coffee
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

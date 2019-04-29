import React from 'react';
import Search from './Search';
import Nav from './Nav';

const Header = ({ handleFetch }) => {
  return (
    <>
      <Search handleFetch={handleFetch} />
      <Nav handleFetch={handleFetch} />
    </>
  );
};

export default Header;

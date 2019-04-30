//Bring in dependencies
import React from 'react';

//Bring in components
import Search from './Search';
import Nav from './Nav';

const Header = ({ handleFetch }) => {
  return (
    <>
      {/* Search and Nav are nested inside the Header, both taking the handeFetch method as props */}
      <Search handleFetch={handleFetch} />
      <Nav handleFetch={handleFetch} />
    </>
  );
};

export default Header;

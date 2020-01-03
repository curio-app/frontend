import React from 'react';
import { Link } from 'react-router-dom';

const UnauthNav = () => {
  return (
    <nav className="nav-link-wrapper">
      <Link to="/about">about</Link>
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
    </nav>
  );
};

export default UnauthNav;

import React from 'react';
import '../Nav.css';

const Nav = () => {
  return (
    <nav>
      <a href="/" className="baloo">curio</a>
      <div className="nav-link-wrapper">
        <a href="/about">about</a>
        <a href="/login">login</a>
        <a href="/register">register</a>
      </div>
    </nav>
  );
};

export default Nav;

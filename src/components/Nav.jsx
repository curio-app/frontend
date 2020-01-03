import React from 'react';
import { Link } from 'react-router-dom';
import '../Nav.css';

const Nav = () => {
  return (
    <header>
      <Link to="/" class="baloo">
        curio
      </Link>
      <nav className="nav-link-wrapper">
        <Link to="/about">about</Link>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </nav>
    </header>
  );
};

export default Nav;

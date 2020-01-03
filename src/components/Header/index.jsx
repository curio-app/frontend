import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import UnauthNav from './UnauthNav';
import AuthNav from './AuthNav';

const Header = () => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header>
      <div>
        <Link to="/" className="baloo">
          curio
        </Link>
        {token ? <AuthNav user={user} /> : <UnauthNav />}
      </div>
    </header>
  );
};

export default Header;

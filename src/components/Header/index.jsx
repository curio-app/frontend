import React from 'react';
import { Link } from 'react-router-dom';

import { useUserState } from '../../contexts/userContext';

import './style.css';

import UnauthNav from './UnauthNav';
import AuthNav from './AuthNav';

const Header = () => {
  const user = useUserState();

  return (
    <header>
      <div>
        <Link to="/" className="baloo">
          curio
        </Link>
        {user.loggedIn ? <AuthNav user={user} /> : <UnauthNav />}
      </div>
    </header>
  );
};

export default Header;

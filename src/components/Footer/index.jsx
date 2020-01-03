import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa';

import './style.css';

const Footer = () => {
  return (
    <footer>
      <footer className="wrapper">
        <section className="left">
          <h2>curio</h2>
          <div className="social" role="navigation">
            <a href="#facebook">
              <FaFacebookF />
            </a>
            <a href="#twitter">
              <FaTwitter />
            </a>
            <a href="#pinterest">
              <FaPinterest />
            </a>
          </div>
        </section>
        <section className="right">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/about">Privacy Policy</Link>
            <Link to="/about">Contact Us</Link>
          </nav>
        </section>
      </footer>
    </footer>
  );
};

export default Footer;

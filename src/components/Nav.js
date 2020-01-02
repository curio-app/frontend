import React from 'react';
import '../Nav.css';

const Nav = () => {
    return <nav>
        <a href="#" class="baloo">curio</a>
        <div className="nav-link-wrapper">
            <a href="#">about</a>
            <a href="#">login</a>
            <a href="#">register</a>
        </div>
    </nav>
}

export default Nav;

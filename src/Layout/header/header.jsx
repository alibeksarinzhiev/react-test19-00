import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <ul>
            <li>
            <Link to='/'>home</Link>
            </li>
            <li>
            <Link to='/about'>about</Link>
            </li>
            <li>register</li>
            <li>login</li>
        </ul>
       </header>
    );
};

export default Header;
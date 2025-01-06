import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">{'Home'}</Link>
        <Link to="/products">{'Products'}</Link>
        <Link to="/users">{'Users'}</Link>
        <Link to="/partners">{'Partners'}</Link>
      </nav>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;

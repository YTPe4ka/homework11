import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">{t('navbar.home')}</Link></li>
        <li><Link to="/products">{t('navbar.products')}</Link></li>
        <li><Link to="/users">{t('navbar.users')}</Link></li>
        <li><Link to="/partners">{t('navbar.partners')}</Link></li>
      </ul>
      <div>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('ru')}>RU</button>
        <button onClick={() => changeLanguage('uz')}>UZ</button>
      </div>
    </nav>
  );
};

export default Navbar;

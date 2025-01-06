import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="page">
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
    </div>
  );
};

export default Home;

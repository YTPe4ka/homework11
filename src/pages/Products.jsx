import React from 'react'
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('products.title')}</h1>
    </div>
  );
};

export default Products;


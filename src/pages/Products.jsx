import React from 'react';
import { useTranslation } from 'react-i18next';

const productsData = [
  { id: 1, name: 'Product 1', description: 'Description of product 1' },
  { id: 2, name: 'Product 2', description: 'Description of product 2' },
  { id: 3, name: 'Product 3', description: 'Description of product 3' }
];

const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1>{t('products.title')}</h1>
      <p>{t('products.description')}</p>
      <div className="cards">
        {productsData.map((product) => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

import React from 'react';
import { useTranslation } from 'react-i18next';

const usersData = [
  { id: 1, name: 'User 1', email: 'user1@example.com' },
  { id: 2, name: 'User 2', email: 'user2@example.com' },
  { id: 3, name: 'User 3', email: 'user3@example.com' }
];

const Users = () => {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1>{t('users.title')}</h1>
      <p>{t('users.description')}</p>
      <div className="cards">
        {usersData.map((user) => (
          <div className="card" key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

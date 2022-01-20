import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import s from './Navigation.module.scss';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { t } = useTranslation();
  const activeStyle = {
    color: '#c01919',
    borderBottom: '1px solid #c01919',
  };
  return (
    <nav className={s.navigation}>
      <NavLink
        to="/"
        exact
        className={s.link}
        id="homeLink"
        activeStyle={activeStyle}
      >
        {t('home')}
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          id="contactsLink"
          activeStyle={activeStyle}
        >
          {t('contacts')}
        </NavLink>
      )}
    </nav>
  );
}

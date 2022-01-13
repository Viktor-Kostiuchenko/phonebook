import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from 'components/Logo';
import s from './Navigation.module.scss';

export default function Navigation() {
  const { t } = useTranslation();
  return (
    <nav className={s.navigation}>
      <NavLink to="/" exact>
        <Logo />
      </NavLink>

      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        {t('home')}
      </NavLink>

      <NavLink
        to="/contacts"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        {t('contacts')}
      </NavLink>
    </nav>
  );
}

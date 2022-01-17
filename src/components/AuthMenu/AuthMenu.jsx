import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import s from './AuthMenu.module.scss';

export default function AuthMenu() {
  const activeStyle = {
    color: '#ff524b',
  };
  const { t } = useTranslation();
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        id="register"
        activeStyle={activeStyle}
      >
        {t('reg')}
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        id="login"
        activeStyle={activeStyle}
      >
        {t('in')}
      </NavLink>
    </div>
  );
}

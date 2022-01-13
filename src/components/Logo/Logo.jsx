import React from 'react';
import s from './Logo.module.scss';
import logo from 'images/phonebook.png';

export default function Logo() {
  return (
    <div className={s.logo}>
      <img className={s.logoImg} src={logo} alt="logo" id="logo" />
    </div>
  );
}

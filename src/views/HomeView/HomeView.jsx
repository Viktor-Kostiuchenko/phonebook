import React from 'react';
import s from './HomeView.module.scss';

export default function HomeView() {
  return (
    <div className={s.container} id="homeView">
      <div className={s.quote}>
        <h2 className={s.title}>Just</h2>
        <h2 className={s.title}>Be</h2>
        <h2 className={s.title}>Closer</h2>
      </div>
    </div>
  );
}

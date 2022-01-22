import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from 'redux/auth/auth-slice';
import { authSelectors } from 'redux/auth';
import Icons from 'images/icons/sprite.svg';
import s from './Theme.module.scss';

export default function Theme() {
  const theme = useSelector(authSelectors.getTheme);
  const [darkMode, setDarkMode] = useState(theme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeTheme(darkMode));
  }, [darkMode, dispatch]);

  return (
    <div className={s.switcher}>
      <svg className={s.icon} id="lightIcon" width="28" height="28">
        <use xlinkHref={`${Icons}#light`} />
      </svg>
      <div className={s.switchControl}>
        <input
          className={s.switchToggle}
          onChange={() => setDarkMode(!darkMode)}
          type="checkbox"
          name="theme"
          id="theme-switch-toggle"
          aria-label="Переключить между тёмной и светлой темой"
          checked={darkMode}
        />
        <label
          aria-hidden="true"
          className={s.switchTrack}
          id="switchTrack"
          htmlFor="theme-switch-toggle"
        />
        <div aria-hidden="true" className={s.switchMarker} id="switchMarker" />
      </div>
      <svg className={s.icon} id="darkIcon" width="28" height="28">
        <use xlinkHref={`${Icons}#dark`} />
      </svg>
    </div>
  );
}

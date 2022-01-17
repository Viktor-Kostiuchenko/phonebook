import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from 'redux/contacts';
import { useLocalStorage } from 'hooks/useLocalStorage';
import Icons from 'images/icons/sprite.svg';
import s from './Theme.module.scss';

export default function Theme() {
  const [darkMode, setDarkMode] = useLocalStorage('darkTheme', false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    dispatch(actions.changeTheme(!darkMode));
  }, [darkMode, dispatch]);

  return (
    <div className={s.switcher}>
      <svg className={s.darkIcon} width="28" height="28">
        <use xlinkHref={`${Icons}#light`}></use>
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
          htmlFor="theme-switch-toggle"
        ></label>
        <div aria-hidden="true" className={s.switchMarker}></div>
      </div>
      <svg className={s.darkIcon} width="28" height="28">
        <use xlinkHref={`${Icons}#dark`}></use>
      </svg>
    </div>
  );
}

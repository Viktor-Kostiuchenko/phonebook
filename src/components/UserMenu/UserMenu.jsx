import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import { authSelectors, authOperations } from '../../redux/auth';
import Languages from 'components/Languages';
import Theme from 'components/Theme';
import Icons from 'images/icons/sprite.svg';
import s from './UserMenu.module.scss';

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const userMenuEl = useRef(null);
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const { t } = useTranslation();

  return (
    <>
      <div className={s.profileWrapper}>
        <p className={s.nameBox} id="userName">
          {t('user')}, <span className={s.name}>{name}</span>
        </p>
        <div className={s.buttonBox}>
          <button
            type="button"
            className={s.settingsBtn}
            id="settingsBtn"
            aria-label="Open user settings"
            onClick={() => {
              setOpen(true);
            }}
          >
            <svg width="35" height="35" className={s.icon} id="settingsIcon">
              <use xlinkHref={`${Icons}#settings`} />
            </svg>
          </button>
          <button
            className={s.logoutBtn}
            id="logoutBtn"
            type="button"
            aria-label="Log out"
            onClick={() => dispatch(authOperations.logOut())}
          >
            <span className={s.buttonName}>{t('out')} </span>
          </button>
        </div>
        <CSSTransition
          in={open}
          timeout={300}
          classNames={s}
          unmountOnExit
          nodeRef={userMenuEl}
        >
          <div className={s.options} ref={userMenuEl}>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
              }}
              className={s.closeBtn}
              aria-label="Close user menu"
            >
              <svg
                width="20"
                height="20"
                className={s.closeIcon}
                id="closeIcon"
              >
                <use xlinkHref={`${Icons}#close`} />
              </svg>
            </button>
            <Languages />
            <Theme />
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

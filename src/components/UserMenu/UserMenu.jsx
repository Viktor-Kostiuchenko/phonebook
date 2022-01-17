import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { useTranslation } from 'react-i18next';
import Languages from 'components/Languages';
import Theme from 'components/Theme';
import Icons from 'images/icons/sprite.svg';
import s from './UserMenu.module.scss';

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const { t } = useTranslation();

  return (
    <>
      <div className={s.profileWrapper}>
        <div className={s.nameBox}>
          {t('user')},{' '}
          <span className={s.name} id="userName">
            {name}
          </span>
        </div>
        <div className={s.buttonBox}>
          <button
            type="button"
            className={s.settingsBtn}
            onClick={() => {
              setOpen(true);
            }}
          >
            <svg width="35" height="35" className={s.icon} id="settingsIcon">
              <use xlinkHref={`${Icons}#settings`}></use>
            </svg>
          </button>
          <button
            className={s.logoutBtn}
            id="logoutBtn"
            type="button"
            onClick={() => dispatch(authOperations.logOut())}
          >
            <span className={s.buttonName}>{t('out')} </span>
          </button>
        </div>
        {open && (
          <div className={s.options}>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
              }}
              className={s.closeBtn}
            >
              <svg
                width="20"
                height="20"
                className={s.closeIcon}
                id="closeIcon"
              >
                <use xlinkHref={`${Icons}#close`}></use>
              </svg>
            </button>
            <Languages />
            <Theme />
          </div>
        )}
      </div>
    </>
  );
}

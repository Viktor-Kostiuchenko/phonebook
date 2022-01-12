import { useTranslation } from 'react-i18next';
import { slide as Menu } from 'react-burger-menu';
import Logo from 'components/Logo';
import Languages from 'components/Languages';
import Theme from 'components/Theme';
import Icons from 'images/icons/sprite.svg';
import s from './Header.module.scss';

export default function Header() {
  const { t } = useTranslation();
  const styles = {
    bmMenuWrap: {
      position: 'fixed',
      height: '200px',
      width: '200px',
      top: '0',
    },
  };
  return (
    <header className={s.header}>
      <Logo />
      <Menu
        styles={styles}
        // noOverlay
        right
        customBurgerIcon={
          <svg width="35" height="35" className={s.icon}>
            <use xlinkHref={`${Icons}#user`}></use>
          </svg>
        }
        burgerButtonClassName={s.burger}
        burgerBarClassName={s.burgerBars}
        crossButtonClassName={s.crossButton}
        crossClassName={s.cross}
        menuClassName={s.menu}
        morphShapeClassName={s.morphShape}
        itemListClassName={s.itemList}
        itemClassName={s.item}
        overlayClassName={s.overlay}
      >
        <div className={s.options}>
          <Languages />
          <Theme />
          <button className={s.button} type="button">
            <span className={s.buttonName}>{t('out')} </span>
          </button>
        </div>
      </Menu>
    </header>
  );
}

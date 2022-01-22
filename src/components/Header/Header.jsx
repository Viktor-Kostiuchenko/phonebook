import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthMenu from 'components/AuthMenu';
import { authSelectors } from 'redux/auth';
import s from './Header.module.scss';

export default function Header() {
  const [windowSize, setWindowSize] = useState(0);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [windowSize]);

  const styles = {
    bmMenuWrap: {
      position: 'fixed',
      height: '400px',
      top: '0',
      right: '0',
    },
  };

  return (
    <header className={s.header}>
      <NavLink to="/" exact>
        <Logo />
      </NavLink>

      {windowSize < 720 && (
        <Menu
          right
          styles={styles}
          id="mobileMenu"
          burgerButtonClassName={s.burger}
          burgerBarClassName={s.burgerBars}
          crossButtonClassName={s.crossButton}
          crossClassName={s.cross}
          menuClassName={s.menu}
          overlayClassName={s.overlay}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </Menu>
      )}

      {windowSize >= 720 && (
        <>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </>
      )}
    </header>
  );
}

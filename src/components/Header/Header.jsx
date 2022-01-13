import { useSelector } from 'react-redux';
// import { slide as Menu } from 'react-burger-menu';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthMenu from 'components/AuthMenu';
import { authSelectors } from 'redux/auth';
import s from './Header.module.scss';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      {/* <Menu left
        burgerButtonClassName={s.burger}
        burgerBarClassName={s.burgerBars}
      > */}
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      {/* </Menu> */}
    </header>
  );
}
